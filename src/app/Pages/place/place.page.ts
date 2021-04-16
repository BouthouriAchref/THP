import { Component, OnInit} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RatePage } from '../rate/rate.page';


@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})

export class PlacePage implements OnInit {
  isSeeMore: boolean = false;
  seeMore: boolean = false;
  hobbies = ["camping","camping","camping","camping","campinglife","campingwithdogs","campingtrip","campingvibes"];
  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };
  
  constructor(
    public modalController: ModalController,
    public alertController: AlertController) { }

  async addRate(){
    const modal = await this.modalController.create({
      component: RatePage,
      cssClass: 'dialog-modal',
      componentProps:{
        'id':"1",
      }
    });
    return await modal.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Rate this Place',
      message: 'If you are loving (or even hating) this place, an honest rating would really help to defame the place',
      buttons: [
        {
          text:'Rate',
          handler : data =>{
           this.addRate();
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          cssClass: 'secondary',
          handler : data =>{
          }
        }
      ]
    });
    await alert.present();

  }


  ngOnInit() {
  }

  getColor(i){
    let colors = ["#ED93D5","#94DAEC","#FB6175","#EFBCFF","#F2D28A"];
    return colors[i];
  }
}


