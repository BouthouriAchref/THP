import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FbService } from 'src/app/services/fb.service';
import { PlaceService } from 'src/app/services/place.service';
import { RatePage } from '../rate/rate.page';


@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})

export class PlacePage implements OnInit {
  Place: any;
  id: any;
  like: boolean = false;
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
    private fb: FbService, private Auth: AuthService) { }


    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        //console.log('id', this.id)
      });

      this.placeService.getPlaceById(this.id).subscribe(async res => {
        if(res.success){
        this.Place = await res.data;
        }
        console.log('Place', this.Place)
      });
    
  
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

  Like() {
    this.like = !this.like
  }

  async showAlert() {
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

  }

  canActivatefb(): boolean {
    return this.fb.isAuthenticated();
  }
  canActivate(): boolean {
    return this.Auth.isAuthenticated();
  }

}


