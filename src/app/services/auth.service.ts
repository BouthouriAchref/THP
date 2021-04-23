import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController, isPlatform, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

const TOKEN_KEY = 'access_token';
const ID_USER = 'id';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = null;
  url = environment.url;
  authenticationState = new BehaviorSubject(false);
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage, private plt: Platform, private alertController: AlertController ) {
    this.plt.ready().then(() => {
      this.checkToken();
       //this.logout();
      
    
    });
  }

  checkToken(){
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
          
        } else {
          this.storage.remove(TOKEN_KEY);
          
        }
      }
    });
  }

  registerFb(credentials) {
    return this.http.post(`${this.url}/api/Auth/register/facebook`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  register(credentials) {
    return this.http.post(`${this.url}/api/Auth/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post(`${this.url}/api/Auth/login`, credentials).pipe(
      tap(async res => {
        await this.storage.set(ID_USER, res['id']);
        await this.storage.set(TOKEN_KEY, res['token']);
        this.user = this.helper.decodeToken(res['token']);
        this.authenticationState.next(true);
      }),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
        
      })
    );
  }

  async logout() {
    await this.storage.remove(ID_USER);
    //console.log('this.storage.get(ID_USER);', await this.storage.get(ID_USER))
    await this.storage.remove(TOKEN_KEY);
    await this.storage.clear();
    //console.log('this.storage.get(TOKEN_KEY));', await this.storage.get(TOKEN_KEY))
    this.authenticationState.next(false);
  }

  getSpecialData() {
    return this.http.get(`${this.url}/api/Auth/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this !');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Warning',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }


 
}
