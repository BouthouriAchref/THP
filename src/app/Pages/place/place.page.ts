import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { FbService } from 'src/app/services/fb.service';
import { PlaceService } from 'src/app/services/place.service';
import { RatePage } from '../rate/rate.page';
import { ProfileService } from 'src/app/services/profile.service';
const ID_USER = 'id';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})

export class PlacePage implements OnInit {
  Place: any;
  id: any;
  Page: String;
  like: boolean;
  isSeeMore: boolean = false;
  seeMore: boolean = false;
  hobbies = ["camping", "camping", "camping", "camping", "campinglife", "campingwithdogs", "campingtrip", "campingvibes"];
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };

  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private fb: FbService, private Auth: AuthService,
    private storage: Storage,
    private profileService: ProfileService,
    private router: Router) {
    this.placeService.PlaceSubjectEvent.subscribe(res => {
      if (res) {
        this.route.params.subscribe(params => {
          this.id = params['id'];

          console.log('id', this.id)
        });
        this.placeService.getPlaceById(this.id).subscribe(async res => {
          if (res.success) {
            this.Place = await res.data;
          }
        })
      }
    })
  }

  ngOnInit() {
    //console.log(this.like)
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.Page = params['Page']
      console.log('id', this.id,this.Page)
    });

    this.placeService.getPlaceById(this.id).subscribe(async res => {
      if (res.success) {
        this.Place = await res.data;
        console.log('____', this.Place)
      }

      //console.log('Place', this.Place)
    });
    if (this.canActivate() || this.canActivatefb()) {
      this.storage.get(ID_USER).then((res) => {
        this.profileService.findUserById(res).subscribe((response) => {
          for (let place of response.FavoritesPlaces) {
            if (this.Place._id == place._id) {
              this.like = true;
            }
          }
        })
      })
    }


  }


  async addRate() {
    const modal = await this.modalController.create({
      component: RatePage,
      cssClass: 'dialog-modal2',
      componentProps: {
        "id": this.Place._id,
      }
    });
    return await modal.present();
  }

  Like(id) {
    if (this.canActivate() || this.canActivatefb()){
      this.like = !this.like
      if (this.like) {
        this.storage.get(ID_USER).then((res) => {
          this.placeService.addPlaceToFavorite(id, res);
        })
      } else {
        this.storage.get(ID_USER).then((res) => {
          this.placeService.removePlaceToFavorite(id, res);
        })
      }
    } else {
      this.showAlertt("You need to SignIn");
    }


  }

  async showAlert() {
    if(this.canActivate() || this.canActivatefb()){
      const alert = await this.alertController.create({
        header: 'Rate this Place',
        message: 'If you are loving (or even hating) this place, an honest rating would really help to defame the place',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: data => {
            }
          },
          {
            text: 'Rate',
            handler: data => {
              this.addRate();
            }
          }
        ]
      });
      await alert.present();
  
    }else {
      this.showAlertt("You need to SignIn");
    }
    
  }

  showAlertt(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Warning',
      buttons: [
        {text:'Cancel'
        },
        {text:'SignIn',
          handler : data =>{
            this.router.navigate(['login']);
          }
        }

      ]
    });
    alert.then(alert => alert.present());
  }

  canActivatefb(): boolean {
    return this.fb.isAuthenticated();
  }
  canActivate(): boolean {
    return this.Auth.isAuthenticated();
  }

}


