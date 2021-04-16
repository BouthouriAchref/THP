import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  properties = [];
  url = environment.url;
  constructor(private http: HttpClient) { 

  }

  getAllPlaces(){
    // return this.http.get(`${this.url}/api/Place/Places`)
    return this.http.get<any>(
     ` ${this.url}/api/Place/Places`)
      .pipe(map(response => {
        //console.log('___',response)
        return response;
      }));
  }

  makeCapitalPopup(place) {
    
    return `
      <ion-buttons>
        <h1>
          <b> ${place.Name}</b>
        </h1>
        <ion-button>
          <ion-icon style=' font-size: 34px; color: #ff3838' name="heart-circle" [routerLink]="['/user/bob']"></ion-icon>
        </ion-button>
      </ion-buttons>

      <ng-template [ngFor]="let a  of [1 ,2 ,3 ,4, 5 ]">
      </ng-template>

      <ion-icon style='color: #f2994a' name='star' *ngFor='let n of [1 ,2 ,3 ,4, 5]'></ion-icon>
      <ion-icon style='color: #f2994a' name='star-outline'></ion-icon>
      <p>${place.Description.substring(0, 100)}</p>
     
      

      `
      // <ion-img src='${place?.Attachement.path}'></ion-img>
  }
}
