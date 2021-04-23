import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbService } from 'src/app/services/fb.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  credentialsForm: FormGroup;
  constructor(private fb:FbService,private router: Router, private formBuilder: FormBuilder, private authService: AuthService
    // public authSerives: AuthenticationService,
    // public router:Router
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      fullname: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
      ConfirmPassword:new FormControl ('', [Validators.required, Validators.minLength(6)]),
    });
  }  

  register(){
    this.authService.register(this.credentialsForm.value).subscribe(res =>{
      console.log(this.credentialsForm.value);
      this.authService.login(this.credentialsForm.value).subscribe(res => {
        this.router.navigate(['menu/profile']);
      });
      
    });
  }

  login(){
    this.fb.loginFacebook().then(()=>{
      this.router.navigate(['menu/profile']);
    })
      
  }


  // signUp(){
  //   //console.log('this.credentialsForm', this.credentialsForm)
  //   this.authService.register(this.credentialsForm.value).subscribe( reponse => {
  //     //console.log('resp', reponse)
      
  //   });
  // }





  // signUp(email, password){

  //   this.authSerives.registerUser(email.value, password.value)
  //   .then((res)=>{
  //     console.log(res)
  //     this.router.navigate(['/login'])
  //   }).catch((error)=>{
  //     window.alert(error.message)
  //   })
  // }

}
