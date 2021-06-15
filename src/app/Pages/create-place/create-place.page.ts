import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams, LoadingController, ActionSheetController, AlertController, Platform, isPlatform } from '@ionic/angular';
import { PlaceService } from 'src/app/services/place.service';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { Place } from 'src/app/models/Place';
import { latLng } from 'leaflet';
import { map } from 'rxjs/operators';
const ID_USER = 'id';
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
  id: number;
  idPlace: any;
  toggleValue: boolean = true;
  credentialsForm: FormGroup;
  based64Image: String;
  selectedFile: File = null;
  response: any;
  firstresp: any;
  error: any;
  categories: any;
  showresp = false;
  Platform : boolean;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private placeService: PlaceService,
    private storage: Storage,
    public loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // console.table(this.navParams);
    // this.id = this.navParams.data.paramID;

    this.credentialsForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      lat: new FormControl(''),
      lon: new FormControl('')
    });

    this.placeService.getAllCategory().subscribe(async (res) => {
      this.categories = await res.category
      console.log('cat',this.categories)
    })
  }

  setupPlatform() {
    if (isPlatform('desktop')) {
      this.Platform = false
    } else if (isPlatform('cordova')) {
      this.Platform = true
    } 
  }


  async closeModal() {
    const onCloseData: string = "Wrapped Up!";
    await this.modalController.dismiss(onCloseData);
  }

  change() {
    this.toggleValue = !this.toggleValue;
    //console.log(this.toggleValue);
  }

  selectChangeHandlerState(event) {
    this.credentialsForm.controls['state'].setValue(event.target.value);
    //return event.target.value;
  }

  selectChangeHandlerCat(event) {
    this.credentialsForm.controls['category'].setValue(event.target.value);
    //return event.target.value;
  }

  cmo() {
    console.log('___', this.credentialsForm.value)
  }

  openCamera() {
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.camera.getPicture(option).then(async (imageData) => {
      this.based64Image = await imageData
      //this.based64Image = 'data:image/jpeg;based64,' + imageData;
    })
  }

  openGallery() {
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY

    }
    this.camera.getPicture(option).then(async (imageData) => {
      this.based64Image = await imageData
      //this.based64Image = 'data:image/jpeg;based64,' + imageData;
    })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      //title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.openGallery();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.openCamera();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  Submit() {
    console.log(this.credentialsForm.value)
    if (this.credentialsForm.invalid) {
      console.log('invalid form');
    } else {
      //console.log('Form', this.credentialsForm.value)
      this.placeService.getLat(this.credentialsForm.value).subscribe(async res => {
        console.log('lat', res)
        this.credentialsForm.controls['lat'].patchValue(await res)
      })
      this.placeService.getLon(this.credentialsForm.value).subscribe(async res => {
        console.log('lon', res)
        this.credentialsForm.controls['lon'].patchValue(await res)
      })

      setTimeout(() => {

        this.CreatePlace();
        this.closeModal();
        this.showAlert('Success','Place created successfully')

      }, 2000);
    }
  }

  CreatePlace() {
    // console.log('AddPlace',this.credentialsForm.value)
    this.storage.get(ID_USER).then(async (res) => {
      console.log('Form', await this.credentialsForm.value)
      this.placeService.addPlace(await res, await this.credentialsForm.value).subscribe(async response => {
        this.placeService.uploadImage(await response.place._id, this.based64Image)
      })
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.Submit();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  showAlert(head,msg) {
    let alert = this.alertController.create({
      message: msg,
      header: head,
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

  // Submit() {
  //   this.storage.get(ID_USER).then(async (res) => {
  //     await this.placeService.getLat(this.credentialsForm.value).then((res) => {
  //       console.log('lat', res)
  //       this.credentialsForm.controls['lat'].patchValue(res)
  //     })
  //     await this.placeService.getLon(this.credentialsForm.value).then((res) => {
  //       console.log('lon', res)
  //       this.credentialsForm.controls['lon'].patchValue(res)
  //     })
  //     console.log('Form', await this.credentialsForm.value)
  //     //this.placeService.addPlace(await res, await this.credentialsForm.value);
  //     this.closeModal();
  //   })
  // }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('file',this.selectedFile)
  }

  AddPlace() {
    console.log('__', this.credentialsForm.value)
    if (this.credentialsForm.valid) {
      this.storage.get(ID_USER).then(async (res) => {
      this.placeService.addPlace(res, this.credentialsForm.value).subscribe(res => {
        this.idPlace = res.place._id
        console.log(res, this.idPlace)
        if(res.msg =="succes"){
          this.onUpload(this.idPlace);
        }
        
      })
    })
  }
  this.closeModal();
  this.showAlert('Success','Place created successfully')
  }

  onUpload(id) {
      const fb = new FormData();
      fb.append('image', this.selectedFile)
      this.placeService.uploadImagePlace(id, fb).subscribe(res => {
        console.log(res)
      })
    }


}
