import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Storage } from '@ionic/storage-angular';
import { ProfileService } from 'src/app/services/profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ImagesService } from 'src/app/services/images.service';
import { FbService } from 'src/app/services/fb.service';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
const ID_USER = 'id';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  USER :any;
  id : any;
  places : any[];
  birthday : String = "Born"; 
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };
  constructor(private Auth: AuthService,private profile: ProfileService,private helper: JwtHelperService, private router: Router,private route: ActivatedRoute,private imagesService: ImagesService ,private storage: Storage, private fb:FbService) 
  { }

   
  ngOnInit() {
      this.storage.get(ID_USER).then(async (res) =>{
        await this.profile.findUserById(res).subscribe((user : User) => {
          this.USER = user;
          console.log(this.USER);
      });
    });


  }
  
  Logout(){
    this.Auth.logout();
    this.fb.logoutFacebook()
  }

}
