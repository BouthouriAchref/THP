import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  properties = [];

  constructor() { 
    fetch('../../assets/places.json')
    .then(res=>res.json())
    .then(data=>{
      this.properties=data.places;});
  }

  makeCapitalPopup(place) {
    
    return `
      <ion-buttons>
        <h1>
          <b> ${place.title}</b>
        </h1>
        <ion-button>
          <ion-icon style=' font-size: 34px; color: #ff3838' name="heart-circle" [routerLink]="['/user/bob']"></ion-icon>
        </ion-button>
      </ion-buttons>

      <ng-template [ngFor]="let a  of [1 ,2 ,3 ,4, 5 ]">
      </ng-template>

      <ion-icon style='color: #f2994a' name='star' *ngFor='let n of [1 ,2 ,3 ,4, 5]'></ion-icon>
      <ion-icon style='color: #f2994a' name='star-outline'></ion-icon>
      <p>${place.description}</p>
      <img src='${place.image}' />
      `
  }
}
