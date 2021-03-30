import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Storage } from '@ionic/storage';
import { ProfileService } from 'src/app/services/profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';
const ID_USER = 'id';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  USER :User;
  id : any;
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };
  constructor(private profile: ProfileService,private helper: JwtHelperService, private router: Router,private route: ActivatedRoute, private storage: Storage) 
  { }

  ngOnInit() {
    // this.id = this.route.params.subscribe( params =>{
      this.storage.get(ID_USER).then((res) =>{
        console.log(res);
        this.profile.findUserById(res).subscribe((user : User) => {
          this.USER = user;
          console.log(this.USER);
      });
      // console.log(this.profile.findUserById(params['id']))
      //});
    });
  }
}
