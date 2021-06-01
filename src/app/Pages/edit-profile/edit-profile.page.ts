import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Storage } from '@ionic/storage-angular';
import { ModalController, ActionSheetController, NavController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  ID_USER = 'id';
  USER: any;
  error: any;
  response: any;
  images: any = [];
  credentialsForm: FormGroup;
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  isOpened= false;
  photos : any;
  url = environment.url;
  serverurl : string;
  constructor(private profile: ProfileService,private formBuilder: FormBuilder,public navCtrl: NavController, private actionSheetCtrl: ActionSheetController, private imagesService: ImagesService, private modalcontroller: ModalController, private storage: Storage,  private alertController: AlertController, public camera: Camera) { 
    this.profile.ProfileSubjectEvent.subscribe(res => {
      this.USER = res;
      //console.log('_in edit profile__',res)
    })

  }
  
  ngOnInit() {
    this.storage.get(this.ID_USER).then((res) => {
      //console.log('res', res)
       this.profile.findUserById(res).subscribe((user: any) => {
        this.USER = user;
        console.log('user', user);
      });
    });

    this.credentialsForm = this.formBuilder.group({
      fullname: new FormControl(''),
      Birthday: new FormControl(''),
      Gender: new FormControl(''),
      Nationalite: new FormControl(''),
      oldpassword: new FormControl('',[Validators.minLength(6)]),
      newpassword: new FormControl('',[Validators.minLength(6)]),
      confirmpassword: new FormControl('',[Validators.minLength(6)])
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
    this.camera.getPicture(option).then((imageData) => {
      this.updateImage(imageData);

      
    })
  }

  openCamera() {
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.camera.getPicture(option).then((imageData) => {
      this.updateImage(imageData);
    })
  }

  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      //title: 'Modify your album',
      buttons: [
        {
          text: 'Load from Source',
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
          role: 'cancel',
        }
      ]
    });

    actionSheet.present();
  }

  updateImage(img){
    this.storage.get(this.ID_USER).then(async (resp) => {
      this.profile.uploadImage(await resp, img).then( res => {
        this.response = res
      }).catch(err => {
        this.error = err
      })
    })
  }

  showHidepassword(){
    this.showPassword = !this.showPassword
    this.showPassword1 = !this.showPassword1
    this.showPassword2 = !this.showPassword2
  }

  selectChangeHandlerContry(event){
    this.credentialsForm.controls['Nationalite'].setValue(event.target.value)
  }

  selectChangeHandlerGender(event){
    this.credentialsForm.controls['Gender'].setValue(event.target.value)
  }

  Submit(){
    //console.log('_____',this.credentialsForm.value)
    if(this.credentialsForm.valid){
      this.profile.updateProfile(this.USER._id,this.credentialsForm.value)
      this.showAlert('Info','Profile Update Successfully')
    }else {
      this.showAlert('Warning','You need to update your contact')
    }

  }

  showAlert(head,msg) {
    let alert = this.alertController.create({
      message: msg,
      header: head,
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }



  // reloadImages() {
  //   //console.log('id', this.USER);
  //   this.imagesService.getImage(this?.USER?.Avatar?._id).subscribe(data => {
  //     this.images.push(data);
  //     //console.log('image', this.images)
  //   })
  // }
  // async openImage(img) {
  //   let modal = await this.modalcontroller.create(img);
  //   modal.present();
  // }
}
