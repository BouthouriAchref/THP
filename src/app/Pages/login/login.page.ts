import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authSerives: AuthenticationService,
              public router:Router) { }

  ngOnInit() {
  }

  logIn(email, password){

    this.authSerives.signIn(email.value, password.value)
    .then((res)=>{ 
      localStorage.setItem('uid',res.user.uid) 
      this.router.navigate(['/menu/home']);
    }).catch((error)=>{
      window.alert(error.message)
    })
  }
     
}
