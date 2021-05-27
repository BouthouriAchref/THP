import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { FbService } from 'src/app/services/fb.service';
import { ProfileService } from 'src/app/services/profile.service';
import { PlaceService } from 'src/app/services/place.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
const ID_USER = 'id';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  USER: any;
  credentialsForm: FormGroup;
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -40,
    slidesPerView: 1.1,
  };

  categoriesSliderConfig = {
    slidesPerView: 2.5,
  };

  categories: any;
  places: any;
  isOpened = false;
  populairePlaces: any[] = [];
  recommendedPlaces: any[] = [];

  constructor(private formBuilder: FormBuilder,private profile: ProfileService, private storage: Storage, private fb: FbService, private Auth: AuthService, private auth: AuthGuardService, private router: Router, private alertController: AlertController, private data: DataService, private place: PlaceService) {
    this.profile.ProfileSubjectEvent.subscribe(res => {
      this.USER = res;
      //console.log('___',res)
    })
  }

  ngOnInit() {
    this.place.getAllPlaces().subscribe(async (res) => {
      if(res.success){
        this.places = await res.data;
        console.log('__',this.places)
      }
      for (let place of this.places){
      if (place.Notice >= 4) {
        this.populairePlaces.push(place)
      } else {
        this.recommendedPlaces.push(place)
      }
      
    }
    console.log(this.populairePlaces)
      
      this.place.getAllCategory().subscribe(async (res) => {
        this.categories = await res.category
        console.log('cat',this.categories)
      })    
    //this.categories = this.data.getCategories();
    // for (let place of this.places) {
    //   place.noteArray.length = place.Notice;
    //   place.noteArray2.length = (5 - place.note);
    // }
    if (this.canActivatefb() || this.canActivate()) {
      this.getAvatar();
    }
    });

    this.credentialsForm = this.formBuilder.group({
      category: new FormControl('', [Validators.required])

    });


  }


  cmo() {
    console.log('___', this.credentialsForm.value)
  }

  selectCat(){
    let id = this.credentialsForm.value.category;
    this.router.navigate(['/place-category',{id}]).then();
  }

  selectChangeHandlerCat(event) {
    this.credentialsForm.controls['category'].setValue(event.target.value);
    //return event.target.value;
    
  }



  selectPlace(id){
    this.router.navigate(['/place', {id}]).then();
  }

  selectCategory(id){
    this.router.navigate(['/place-category',{id}]).then();
  }

  getAvatar(){
      this.storage.get(ID_USER).then( (res) => {
         this.profile.findUserById(res).subscribe(async (user: any) => {
          this.USER = await user;
          //console.log(this.USER);
        });
      });
  }

  open() {
    this.isOpened = !this.isOpened
  }

  onClick() {
    this.router.navigate(['login']);
  }

  // showAlert(msg) {
  //   let alert = this.alertController.create({
  //     message: msg,
  //     header: 'Error',
  //     buttons: [
  //       {text:'SignIn',
  //         handler : data =>{
  //           this.router.navigate(['login']);
  //         }
  //       },
  //       {text:'Annuler'
  //       }
  //     ]
  //   });
  //   alert.then(alert => alert.present());
  // }


  canActivatefb(): boolean {
    return this.fb.isAuthenticated();
  }
  canActivate(): boolean {
    return this.Auth.isAuthenticated();
  }

  Logout() {
    if (this.canActivate){
      this.Auth.logout();
    }
    if (this.canActivatefb){
      this.fb.logoutFacebook();
    }
    
  }




}
