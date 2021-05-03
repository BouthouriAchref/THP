import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  url = environment.url;
  constructor(private http: HttpClient, private alertController: AlertController) { }

  getAllPlaces() {
    return this.http.get<any>(`${this.url}/api/Place/Places`).pipe(map(response => {
      //console.log('___',response)
      return response;
    }));
  }

  getPlaceById(id) {
    return this.http.get(`${this.url}/api/Place/Place/${id}`).pipe(map(response => {
      //console.log('___',response)
      return response
    }));
  }

 getLat(credentials) {
    return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address} ${credentials.city}, ${credentials.state} ${credentials.zip}`).pipe(map(async (response) => {
      console.log('response', response)
      // console.log('ed',this.lon)
      return await response[0].lat;
    }))
  }
  
  getLon(credentials) {
    return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address} ${credentials.city}, ${credentials.state} ${credentials.zip}`).pipe(map(async (response) => {
      console.log('response', response)
      //console.log('ed',this.lon)
      return await response[0].lon;
    }))
  }

  addPlace(id, credentials) {
    //console.log('___',credentials) 
    return this.http.post(`${this.url}/api/Place/addPlace/${id}`, credentials).subscribe(response => {
      console.log('response', response)
      return response
    })
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Warning',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
