import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder";
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { FbService } from 'src/app/services/fb.service';
import { PlaceService } from 'src/app/services/place.service';
import { RatePage } from '../rate/rate.page';
import { ProfileService } from 'src/app/services/profile.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PopUpService } from 'src/app/services/pop-up.service';
const ID_USER = 'id';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})

export class PlacePage implements OnInit {
  Place: any;
  id: any;
  User: any;
  Page: String;
  like: boolean;
  caseStatus: any;
  DeletePlace: boolean = false;
  isSeeMore: boolean = false;
  seeMore: boolean = false;
  map: Leaflet.Map;
  EvalArray: any []; 
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
    private router: Router,
    private socialSharing: SocialSharing,
    private popupService: PopUpService) {
    this.placeService.PlaceSubjectEvent.subscribe(res => {
      if (res) {
        this.route.params.subscribe(params => {
          this.id = params['id'];

          //console.log('id', this.id)
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
      //console.log('id', this.id)
    });

    this.placeService.getPlaceById(this.id).subscribe(async res => {
      if (res.success) {
        this.Place = await res.data;
        this.EvalArray = this.Place.Evaluation
        let note = 0
        if (this.EvalArray.length) {
            for (let evalution of this.EvalArray) {
                note = evalution.Notice + note;
            }
            note = note / this.EvalArray.length;
        }
        //console.log(note)
        this.Place.Notice = Math.floor(note);
        }
        this.getUser();
        this.getPlaceOfUser();
        this.initData();
        //console.log('____', this.Place)
      // console.log('Place', this.Place)
      // console.log('Place', this.Place)
      
    });

    if(this.canActivate() || this.canActivatefb()){
      this.storage.get(ID_USER).then((res) => {
        this.profileService.findUserById(res).subscribe((response) => {
          this.User = response;
          console.log(this.User)
        })
      }) 
    }

    
  }

  initMap(){
    this.map.off()
    this.map.remove()
  }

  async initData() {
    this.map = new Leaflet.Map('map').setView([33.8869, 9.5375], 7)
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom: 6, maxZoom: 20 }).addTo(this.map);
    console.log("places",this.Place)
    
    var One = new Leaflet.Icon({
      iconUrl: '../../assets/red-marker.png',
      shadowUrl: '../../assets/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var Two = new Leaflet.Icon({
      iconUrl: '../../assets/green-marker.png',
      shadowUrl: '../../assets/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    if ((this.Place.Notice <= 2) || (this.Place.Notice == null)) {
      this.caseStatus = One
    } else {
      this.caseStatus = Two
    }
      const circle = Leaflet.marker([this.Place.Address.Location.Lon,this.Place.Address.Location.Lat], { icon: this.caseStatus });
      circle.bindPopup(this.popupService.makeCapitalPopup(this.Place));
      circle.addTo(this.map);
    }
  
  
  socialShare(){
    if (this.canActivatefb() || this.canActivate()){

      var options = {
        message: 'TunisianHiddenPlaces',
        url: this.Place.Attachement[0].Path
      }
      
      this.socialSharing.shareWithOptions(options);
    } else {
      this.showAlertt("You need to SignIn");
    }
  }

  getUser(){
    if (this.canActivate() || this.canActivatefb()) {
      this.storage.get(ID_USER).then((res) => {
        this.profileService.findUserById(res).subscribe((response) => {
          for (let place of response.FavoritesPlaces) {
            //console.log('----------',place._id)
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

  getPlaceOfUser(){
    if(this.canActivate() || this.canActivatefb()){
      this.storage.get(ID_USER).then((res) => {
        this.profileService.findUserById(res).subscribe((response) => {
          for (let place of response.Places) {
            if (this.Place._id == place._id) {
              this.DeletePlace = true;
            }
            //console.log('----------',response)
          }
        })
      })
    }
  }

  DeleteComment(idPlace, idEval){
    console.log('click')
    this.placeService.deleteEvaluationById(idPlace,idEval).subscribe((response)=> {
      this.showAlertMsg('succes',response.msg)
    })
  }


  deletePlace(id){
    this.storage.get(ID_USER).then((res) => {
      this.profileService.findUserById(res).subscribe((response) => {
        this.placeService.deletePlaceById(response._id,id).subscribe((response) => {
          this.showAlertMsg('Succes',response.message)
          this.router.navigate(['menu/profile'])
        })
      })
    })
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

  showAlertMsg(head,msg) {
    let alert = this.alertController.create({
      message: msg,
      header: head,
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
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


