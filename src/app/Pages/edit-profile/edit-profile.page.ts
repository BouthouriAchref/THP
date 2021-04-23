import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Camera } from '@ionic-native/camera/ngx'
import { Storage } from '@ionic/storage';
import { ModalController, ActionSheetController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  ID_USER = 'id';
  images: any = [];
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  isOpened= false;

  constructor(public navCtrl: NavController,public camera: Camera,private actionSheetCtrl: ActionSheetController,private imagesService: ImagesService, private modalcontroller: ModalController, private storage: Storage) { }
  ngOnInit() {
    this.storage.get(this.ID_USER).then((res) =>{
      this.imagesService.getImage(res).subscribe( (res) => {
        console.log('avatar',res);
      })
    })
  }

  async openImage(img){
    let modal = this.modalcontroller.create(img);
    (await modal).present();
  }

  // reloadImages(){
  //   this.imagesService.getImage().subscribe(data =>{
  //     this.images = data;
  //   })
  // }

  async presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      //title: 'Modify your album',
      buttons: [
        {
          text: 'Load from Source',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY)
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
 
    (await actionSheet).present();
  }

  showHidepassword(){
    this.showPassword = !this.showPassword
  }
  showHidepassword1(){
    this.showPassword1 = !this.showPassword1
  }
  showHidepassword2(){
    this.showPassword2 = !this.showPassword2
  }

  takePicture(sourceType){
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    this.camera.getPicture(options).then(async imagePath => {
      let modal = this.modalcontroller.create(imagePath);
      (await modal).present();
      
       (await modal).onDidDismiss()
        .then((data) => {
          // this.reloadImages();
        })
      })
    }
}
