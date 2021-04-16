import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FacebookLoginPlugin, FacebookLogin } from '@capacitor-community/facebook-login';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { isPlatform, Platform } from '@ionic/angular';
registerWebPlugin(FacebookLogin);
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
const TOKEN_KEY = 'access_token';
const ID_USER = 'id';

@Injectable({
  providedIn: 'root'
})
export class FbService {
  fbLogin: FacebookLoginPlugin;
  user = null;
  token = null;
  authenticationState = new BehaviorSubject(false);
  constructor(private helper: JwtHelperService, private storage: Storage, private plt: Platform,private http: HttpClient, private auth: AuthService) { 
    this.plt.ready().then(() => {
      this.checkToken();
      //this.logoutFacebook();
    
    });
  }

 

  checkToken(){
     this.storage.get(TOKEN_KEY).then(token => {
       if (token) {
        this.authenticationState.next(true);
       }
     });
  }

  isAuthenticated() {
    return this.authenticationState.getValue();
  }

   async setupFbLogin() {
    if (isPlatform('desktop')) {
      this.fbLogin = FacebookLogin;
    } else {
      // Use the native implementation inside a real app!
      const { FacebookLogin } = Plugins;
      this.fbLogin = FacebookLogin;
    } 
  }

  async loginFacebook() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    const result = await this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    //console.log('result',result.accessToken.token)
    this.storage.set(TOKEN_KEY,result.accessToken.token)
    this.authenticationState.next(true);
    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadUserData();
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      this.getCurrentToken();
    } else {
      // Login failed
    }
  }

  async getCurrentToken() {    
    const result = await this.fbLogin.getCurrentAccessToken();
    if (result.accessToken) {
      this.token = result.accessToken;
      this.loadUserData();
    } else {
      // Not logged in.
    }
  }

  async loadUserData() {
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    this.http.get(url).subscribe(res => {
      //console.log('user:', res)
      this.user = res;
      this.auth.registerFb(this.user).subscribe((response : any) => {
        this.storage.set(ID_USER,response.user._id)
        console.log('user in data base',response);
      });

    });
  }

  logoutFacebook() {
    this.fbLogin.logout();
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
    this.user = null;
    this.token = null;
  }
}
