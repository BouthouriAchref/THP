import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  id: number;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.id = this.navParams.data.paramID;
  }

  async closeModal() {
    const onCloseData: string = "Wrapped Up!";
    await this.modalController.dismiss(onCloseData);
  }

}
