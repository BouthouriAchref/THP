import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  url = environment.url;

  MapSubject = new Subject();
  MapSubjectEvent = this.MapSubject.asObservable();
  constructor(private http: HttpClient) { }

  getAllPlaces() {
    return this.http.get<any>(`${this.url}/api/Place/Places`).pipe(map(response => {
      //console.log('AllPlaces', response)
      return response;
    }));
  }

  getPlace(id) {
    return this.http.get<any>(`${this.url}/api/Place/Place/${id}`).pipe(map(response => {
      console.log('Place', response)
      return response;
    }))
  }

  getPlacesByCat(id){
    this.getPlacesByCAT(id);
    return this.http.get<any>(`${this.url}/api/Place/Places/Category/${id}`)
  }

  getPlacesByCAT(id){
    return this.http.get<any>(`${this.url}/api/Place/Places/Category/${id}`).subscribe(response => {
      this.MapSubject.next(response.data)
      console.log('Place', response)
      return response;
    })
  }

  makeCapitalPopupPosition() {
    return `
        <h1>
          <b style="font-size: 1.0rem;">You are here</b>
        </h1>
  `
  }

  //  ='color: #f2994a' name='star' >${place?.Evaluation[0]?.Notice}</ion-icon>
  //     <ion-icon style='color: #f2994a' name='star-outline'></ion-icon>
  makeCapitalPopup(place) {
    return `
      <ion-buttons>
        <h1>
          <b style="font-size: 1.5rem;"> ${place?.Name}</b>
        </h1>
        <ion-button>
          <ion-icon style=' font-size: 34px; color: #ff3838' name="heart-circle"></ion-icon>
        </ion-button>
      </ion-buttons>
      <app-notice [note]="${place?.Notice}"></app-notice>
      <p>${place?.Description.substring(0, 100)}</p>
      <ion-img src='${place?.Attachement[0].Path}' style=' border-radius: 10px !important'></ion-img>
  `
  }

  
}