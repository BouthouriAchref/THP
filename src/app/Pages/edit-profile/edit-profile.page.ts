import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Camera } from '@ionic-native/camera/ngx'
import { Storage } from '@ionic/storage-angular';
import { ModalController, ActionSheetController, NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
const ID_USER = 'id';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  images: any = [];
  USER: any;
  constructor(private profile: ProfileService, public navCtrl: NavController, public camera: Camera, private actionSheetCtrl: ActionSheetController, private imagesService: ImagesService, private modalcontroller: ModalController, private storage: Storage) { this.reloadImages(); 
  }
  
  ngOnInit() {
    this.storage.get(ID_USER).then( (res) => {
      console.log('res', res)
       this.profile.findUserById(res).subscribe((user: any) => {
        this.USER = user;
        console.log('user', user);
      });
    });
  }

  async openImage(img) {
    let modal = await this.modalcontroller.create(img);
    modal.present();
  }

  reloadImages() {
    console.log('id', this.USER);
    this.imagesService.getImage(this?.USER?.Avatar?._id).subscribe(data => {
      this.images.push(data);
      console.log('image', this.images)
    })
  }

  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
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

    actionSheet.present();
  }

  async takePicture(sourceType) {
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    this.camera.getPicture(options)
  }
}
