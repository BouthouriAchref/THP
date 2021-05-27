import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject ,FileUploadOptions} from '@ionic-native/file-transfer/ngx';
import { AlertController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  url = environment.url
  
  PlaceSubject = new Subject();
  PlaceSubjectEvent = this.PlaceSubject.asObservable();

  constructor(private http: HttpClient, private alertController: AlertController, private transfer: FileTransfer) { }

  getAllPlaces() {
    return this.http.get<any>(`${this.url}/api/Place/Places`).pipe(map(response => {
      //this.PlaceSubject.next(response)
      //console.log('___',response)
      return response;
    }));
  }

  // getAllPlacesAfterChange() {
  //   this.getAllPlaces();
  //   return this.http.get<any>(`${this.url}/api/Place/Places`)
  // }

  getPlaceById(id) {
    this.getPlaceByID(id);
    return this.http.get<any>(`${this.url}/api/Place/Place/${id}`)
  }

  getPlaceByID(id) {
    return this.http.get<any>(`${this.url}/api/Place/Place/${id}`).subscribe(response => {
      //this.PlaceSubject.next(response)
      //console.log('___',response)
      return response
    });
  }

  getAllCategory(){
    return this.http.get<any>(`${this.url}/api/category`).pipe(map(response => {
      return response;
    }));
  }

  getCategoryById(id){
    return this.http.get<any>(`${this.url}/api/category/${id}`)
  }

  getPlacesByCat(id){
    return this.http.get<any>(`${this.url}/api/Place/Places/Category/${id}`)
  }
  
 getLat(credentials) {
    return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address}, ${credentials.city}, ${credentials.state}, ${credentials.zip}`).pipe(map(async (response) => {
      //console.log('response', response)
      // console.log('ed',this.lon)
      return await response[0].lat;
    }))
  }
  
  getLon(credentials) {
    return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address}, ${credentials.city}, ${credentials.state}, ${credentials.zip}`).pipe(map(async (response) => {
      //console.log('response', response)
      //console.log('ed',this.lon)
      return await response[0].lon;
    }))
  }

  addPlace(id, credentials) {
    //console.log('___',credentials) 
    return this.http.post<any>(`${this.url}/api/Place/addPlace/${id}`, credentials).pipe(map(response => {
      //this.PlaceSubject.next(true)
      //console.log('___',response)
      return response
    }));
  }

  uploadImage(id, img){
    const fileTransfer: FileTransferObject = this.transfer.create();
    
    const path = this.url+'/api/Place/'+id;
    const targetPath = img;

    const options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data'
    };

    return fileTransfer.upload(targetPath,path,options, true)
  }


  addEvaluation(idUser, idPlace, credentials) {
    return this.http.post(`${this.url}/api/evaluation/${idPlace}/${idUser}`, credentials).subscribe(response => {
      this.PlaceSubject.next(true)
      //console.log('response', response)
      return response
    })
  }

  addPlaceToFavorite(idPlace, idUser){
    return this.http.put(`${this.url}/api/Place/Places/addfavorite/${idPlace}/${idUser}`,idUser).subscribe(response => {
      this.PlaceSubject.next(true)
      //console.log('response',response)
      return response
    })
  }

  removePlaceToFavorite(idPlace, idUser){
    return this.http.put(`${this.url}/api/Place/Places/removefavorite/${idPlace}/${idUser}`,idUser).subscribe(response => {
      this.PlaceSubject.next(true)
      //console.log('response',response)
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
