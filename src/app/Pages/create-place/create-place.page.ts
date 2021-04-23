import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
  id: number;
  
  constructor(
    private modalController: ModalController, 
    private navParams: NavParams
    ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.id = this.navParams.data.paramID;
  }

  async closeModal() {
    const onCloseData: string = "Wrapped Up!";
    await this.modalController.dismiss(onCloseData);
  }

}
