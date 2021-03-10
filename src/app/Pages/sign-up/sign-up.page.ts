import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    public authSerives: AuthenticationService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  signUp(email, password){

    this.authSerives.registerUser(email.value, password.value)
    .then((res)=>{
      console.log(res)
      this.router.navigate(['/login'])
    }).catch((error)=>{
      window.alert(error.message)
    })
  }

}
