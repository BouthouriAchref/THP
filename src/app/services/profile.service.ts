import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = environment.url;
  id : any;
  constructor(private http: HttpClient) { }

  findUserById(id){
    return this.http.get(`${this.url}/api/user/${id}`)
  }
}
