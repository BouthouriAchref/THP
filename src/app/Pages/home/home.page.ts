import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { FbService } from 'src/app/services/fb.service';
import { ProfileService } from 'src/app/services/profile.service';
import { PlaceService } from 'src/app/services/place.service';
const ID_USER = 'id';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  USER: any;
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };

  categoriesSliderConfig = {
    slidesPerView: 2.5,
  };

  public categories = [];
  public places: any;
  isOpened = false;

  constructor(private profile: ProfileService, private storage: Storage, private fb: FbService, private Auth: AuthService, private auth: AuthGuardService, private router: Router, private alertController: AlertController, private data: DataService, private place: PlaceService) {
  }

  ngOnInit() {
    this.place.getAllPlaces().subscribe(async (res) => {
      if(res.success){
        this.places = await res.data;
      }    
    this.categories = this.data.getCategories();

    // for (let place of this.places) {
      
    //   place.noteArray.length = place.Notice;
    //   place.noteArray2.length = (5 - place.note);
    // }
    });



    if (this.canActivatefb() || this.canActivate()) {
      this.getAvatar();
    }

  }

  getAvatar(){
      this.storage.get(ID_USER).then( (res) => {
         this.profile.findUserById(res).subscribe(async (user: any) => {
          this.USER = await user;
          console.log(this.USER);
        });
      });
  }

  open() {
    this.isOpened = !this.isOpened
  }

  onClick() {
    this.router.navigate(['login']);
  }

  // showAlert(msg) {
  //   let alert = this.alertController.create({
  //     message: msg,
  //     header: 'Error',
  //     buttons: [
  //       {text:'SignIn',
  //         handler : data =>{
  //           this.router.navigate(['login']);
  //         }
  //       },
  //       {text:'Annuler'
  //       }
  //     ]
  //   });
  //   alert.then(alert => alert.present());
  // }


  canActivatefb(): boolean {
    return this.fb.isAuthenticated();
  }
  canActivate(): boolean {
    return this.Auth.isAuthenticated();
  }

  Logout() {
    if (this.canActivate){
      this.Auth.logout();
    }
    if (this.canActivatefb){
      this.fb.logoutFacebook();
    }
    
  }


}
