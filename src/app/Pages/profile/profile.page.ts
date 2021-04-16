import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Storage } from '@ionic/storage';
import { ProfileService } from 'src/app/services/profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ImagesService } from 'src/app/services/images.service';
import { FbService } from 'src/app/services/fb.service';
import { AuthService } from 'src/app/services/auth.service';
const ID_USER = 'id';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  USER :any;
  id : any;
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };
  constructor(private Auth: AuthService,private profile: ProfileService,private helper: JwtHelperService, private router: Router,private route: ActivatedRoute,private imagesService: ImagesService ,private storage: Storage, private fb:FbService) 
  { }

   
  ngOnInit() {
    // this.id = this.route.params.subscribe( params =>{
      this.storage.get(ID_USER).then(async (res) =>{
        //console.log(res);
        await this.profile.findUserById(res).subscribe((user : User) => {
          this.USER = user;
          console.log(this.USER);
      });
      // console.log(this.profile.findUserById(params['id']))
      //});
    });
    // this.imagesService.getImage("60741f9d64d6491320264873").subscribe( (res) => {
    //   console.log('avatar',res);
    // })
    //console.log('????????????????????????????????????????',this.route)
    //this.USER = this.route.params.subscribe( params => {
      //console.log('paraaaaaaaaaaaaams',params)
      //console.log('this.USER',this.USER)
    //}, err => console.error(err));
    //console.log('user',this.USER)

  }

  onClick(){
    this.router.navigate(['login']);
    // if(!this.auth.canActivate()){
    //   this.showAlert("You need to SignIn");
    // }else {
    //   this.router.navigate(['menu/profile']);
    // }

  }
  
  canActivate(): boolean {
    return this.Auth.isAuthenticated();
  }
  Logout(){
    this.Auth.logout();
  }

}
