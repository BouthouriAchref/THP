import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    // private platform: Platform, private auth: AuthService,
    // private router: Router, private splashScreen: SplashScreen,
    // private statusBar: StatusBar 
    ) {

    //this.initialzeApp();
    }

  // initialzeApp() {
  //   //this.platform.ready().then(() => {
  //     //this.statusBar.styleDefault();
  //     //this.splashScreen.hide();

  //     this.auth.authenticationState.subscribe(state => {
  //       if (state) {
  //         this.router.navigate(['menu/profile']);
  //       } else {
  //         this.router.navigate(['login']);
  //       }
  //     });
  //   //});
  //}
}
