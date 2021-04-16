import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { FbService } from './fb.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private fb:FbService) { }

  canActivate(): boolean {
    // console.log('auth',this.auth.isAuthenticated())
    // console.log('fb',this.fb.isAuthenticated())
    return (this.auth.isAuthenticated() || this.fb.isAuthenticated());
  }
}
