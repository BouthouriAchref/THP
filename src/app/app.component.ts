import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //rootPage:any = 'HomePage'
  constructor(private storage: Storage
    // private platform: Platform, private auth: AuthService,
    // private router: Router, private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
    // platform.ready().then(() => {
    //   statusBar.styleDefault();
    //   splashScreen.hide();

    //       // this.auth.authenticationState.subscribe(state => {
    //       //   if (state) {
    //       //     this.router.navigate(['menu/profile']);
    //       //   } else {
    //       //     this.router.navigate(['login']);
    //       //   }
    //       // });
    // });
  }

  async ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.storage.create();
  }
}



