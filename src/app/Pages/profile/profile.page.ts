import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Storage } from '@ionic/storage-angular';
import { ProfileService } from 'src/app/services/profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ImagesService } from 'src/app/services/images.service';
import { FbService } from 'src/app/services/fb.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ModalController } from '@ionic/angular';
import { CreatePlacePage } from '../create-place/create-place.page';

const ID_USER = 'id';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  USER :any;
  id : any;
  places : any[];
  birthday : String = "Born"; 
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -40,
    slidesPerView: 1.1,
  };
  constructor(
    private Auth: AuthService,
    private profile: ProfileService,
    private helper: JwtHelperService, 
    private router: Router,
    private route: ActivatedRoute,
    private imagesService: ImagesService ,
    private storage: Storage, 
    private fb:FbService,
    public modalController: ModalController,
    public alertController: AlertController
    ) 
  { }

   
  ngOnInit() {
      this.storage.get(ID_USER).then((res) =>{
        //console.log('res',res)
       this.profile.findUserById(res).subscribe((user : User) => {
          this.USER = user;
          //console.log(this.USER);
      });
    });


  }
  
  Logout(){
    this.Auth.logout();
    this.fb.logoutFacebook()
  }


  async addPlace(){
    const modal = await this.modalController.create({
      component: CreatePlacePage,
      cssClass: 'dialog-modal',
      componentProps:{
        'id':"1",
      }
    });
    return await modal.present();
  }

  async createPlace() {
    const alert = await this.alertController.create({
      header: 'Create a new Place',
      message: 'Do you want to create a new place ?',
      buttons: [
        {
          text:'Cancel',
          role:'cancel',
          cssClass: 'secondary',
          handler : data =>{
          }
        },
        {
          text:'Yes',
          handler : data =>{
           this.addPlace();
          }
        }
      ]
    });
    await alert.present();
  }
}
