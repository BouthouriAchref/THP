import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };

  categoriesSliderConfig = {
    slidesPerView: 2.5,
  };

  public categories = [];
  public places = [];
  isOpened= false;

  constructor(private Auth: AuthService,private auth: AuthGuardService, private router : Router,private alertController: AlertController, private data: DataService) {}

  ngOnInit() {
    //throw new Error('Method not implemented.');
    this.categories = this.data.getCategories();
    this.places = this.data.getPlaces();
    for (let place of this.places){
      place.noteArray.length  = place.note; 
      place.noteArray2.length  = ( 5 - place.note );
    }    
  }

  open(){
    this.isOpened= !this.isOpened
  }

  onClick(){
    this.router.navigate(['login']);
    // if(!this.auth.canActivate()){
    //   this.showAlert("You need to SignIn");
    // }else {
    //   this.router.navigate(['menu/profile']);
    // }

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


  canActivate(): boolean {
    return this.Auth.isAuthenticated();
  }

  Logout(){
    this.Auth.logout();
  }
  

}
