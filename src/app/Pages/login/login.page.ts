import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { isPlatform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FbService } from 'src/app/services/fb.service';
//import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  // id : any;
  credentialsForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private https: HttpClient, private fb: FbService
    ) { this.fb.setupFbLogin(); }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
    });
  }

  

  login(){
    this.fb.loginFacebook().then(()=>{
      this.router.navigate(['menu/profile']);
    })
      
  }

  onSubmit(){
    //console.log('this.credentialsForm', this.credentialsForm)
    //console.log('this.credentialsForm.value', this.credentialsForm.value)

    this.authService.login(this.credentialsForm.value).subscribe( (response : any) => {
      console.log('response', response)
      //const id = response.id
       this.router.navigate(['menu/profile']);
      // this.router.navigate([`/user/${id}`],re);
    });
  }

  register(){
    this.authService.register(this.credentialsForm.value).subscribe(res =>{
      this.authService.login(this.credentialsForm.value).subscribe();
      this.router.navigate(['menu/profile']);
    });
  }
  //  Firebase
  // public authSerives: AuthenticationService,
  // public router:Router
  // logIn(email, password){
  //   this.authSerives.signIn(email.value, password.value)
  //   .then((res)=>{ 
  //     localStorage.setItem('uid',res.user.uid) 
  //     this.router.navigate(['/menu/home']);
  //   }).catch((error)=>{
  //     window.alert(error.message)
  //   })
  // }
     
}
