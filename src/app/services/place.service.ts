import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  getAllPlaces(){
    return this.http.get<any>(`${this.url}/api/Place/Places`).pipe(map(response => {
      //console.log('___',response)
        return response;
      }));
  }
}
