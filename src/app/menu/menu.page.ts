import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AlertController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

result :boolean =false;
  constructor(private auth: AuthGuardService, private router : Router,private alertController: AlertController) {
  }

  onClick(){
    if(!this.auth.canActivate()){
      this.showAlert("You need to SignIn");
    }else {
      this.router.navigate(['menu/profile']);
    }

  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: [
        {text:'SignIn',
          handler : data =>{
            this.router.navigate(['login']);
          }
        },
        {text:'Annuler'
        }
      ]
    });
    alert.then(alert => alert.present());
  }

}
