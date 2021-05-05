import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams, LoadingController, ActionSheetController } from '@ionic/angular';
import { PlaceService } from 'src/app/services/place.service';
import { Storage } from '@ionic/storage-angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx'
import { Place } from 'src/app/models/Place';
import { latLng } from 'leaflet';
const ID_USER = 'id';
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
  id: number;
  toggleValue: boolean = true;
  credentialsForm: FormGroup;
  based64Image: String;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private placeService: PlaceService,
    private storage: Storage,
    public loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera
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
  }

  async closeModal() {
    const onCloseData: string = "Wrapped Up!";
    await this.modalController.dismiss(onCloseData);
  }

  change(){
    this.toggleValue= !this.toggleValue;
    console.log(this.toggleValue);
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

  openCamera(){
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(option).then((imageData) => {
      this.based64Image = 'data:image/jpeg;based64,' +imageData;
    })
  }

  openGallery(){
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      
    }
    this.camera.getPicture(option).then((imageData) => {
      this.based64Image = 'data:image/jpeg;based64,' +imageData;
    })
  }

  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
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
    // if (this.credentialsForm.invalid) {
    //   console.log('invalid form');
    // } else {
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
        this.storage.get(ID_USER).then(async (res) => {
          console.log('Form', await this.credentialsForm.value)
          this.placeService.addPlace(await res, await this.credentialsForm.value);
          this.closeModal();
        });
      }, 2000);
    //}
  }




  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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

}
