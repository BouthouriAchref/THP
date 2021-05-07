import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavParams, AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { Handler } from 'leaflet';
import { PlaceService } from 'src/app/services/place.service';
const ID_USER = 'id';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  idPlace: number;
  credentialsForm: FormGroup;
  placeRating: string;
  noRating = false
  constructor(
    private modalController: ModalController,
    private navParams: NavParams, private storage: Storage, private placeService: PlaceService, private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    //console.table(this.navParams);
    this.idPlace = this.navParams.data.id;
    //console.log(this.navParams.data.id)
    this.credentialsForm = this.formBuilder.group({
      Comment: new FormControl('', [Validators.required]),
      Notice: new FormControl('', [Validators.required])

    });
  }

  handleRate($event) {
    this.placeRating = $event.target.defaultValue
    //console.log('placeRating', this.placeRating)
    this.credentialsForm.controls['Notice'].patchValue(this.placeRating)

  }

  Submit() {
    console.log('Form', this.credentialsForm.value)
    if (this.credentialsForm.invalid) {
      console.log('invalid form');
    } else {
      this.storage.get(ID_USER).then(async (res) => {
        this.placeService.addEvaluation(await res, this.idPlace, this.credentialsForm.value)
        this.closeModal();
      })
    }
  }

  async closeModal() {
    const onCloseData: string = "Wrapped Up!";
    await this.modalController.dismiss(onCloseData);
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Warning',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.router.navigate(['place']);
          }
        }
      ]
    });
    alert.then(alert => alert.present());
  }


}
