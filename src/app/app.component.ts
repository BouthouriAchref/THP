import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { AuthGuardService } from './services/auth-guard.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  //rootPage:any = 'HomePage'
  constructor(private storage: Storage,
    private platform: Platform, private auth: AuthService,
    private router: Router, private splashScreen: SplashScreen,
    private statusBar: StatusBar,private authguard: AuthGuardService
  ) {
    this.storage.create();
    this.storage.clear();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

            if (this.authguard.canActivate()) {
              this.router.navigate(['menu/profile']);
            } else {
              this.router.navigate(['menu/home']);
            }
    });

  }

  async ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.storage.create();
    await this.storage.clear();
  }
}



