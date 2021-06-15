import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FbService } from 'src/app/services/fb.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  DefaultAvatar = '60c7567f55b8ac0015ac2de8'
  credentialsForm: FormGroup;
  constructor( private alertController: AlertController,private fb:FbService,private router: Router, private formBuilder: FormBuilder, private authService: AuthService
    // public authSerives: AuthenticationService,
    // public router:Router
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      fullname: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
      ConfirmPassword:new FormControl ('', [Validators.required, Validators.minLength(6)]),
      Avatar:new FormControl ('')
    });
  }  

  register(){
    if(this.credentialsForm.valid){
      this.credentialsForm.controls['Avatar'].patchValue(this.DefaultAvatar)
    this.authService.register(this.credentialsForm.value).subscribe(res =>{
      //console.log(this.credentialsForm.value);
      //this.authService.login(this.credentialsForm.value)
      this.router.navigate(['/login'])
    });
  } else {
    this.showAlert('Faild', 'Fullname, Email and Password are required')
  }

  }

  login(){
    this.fb.loginFacebook().then(()=>{
      this.router.navigate(['menu/profile']);
    })
      
  }

  showAlert(head,msg) {
    let alert = this.alertController.create({
      message: msg,
      header: head,
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
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
