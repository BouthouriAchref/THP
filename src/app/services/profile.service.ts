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
    return this.http.get(`${this.url}/api/Auth/user/${id}`)
  }

  updateAvatar(id){
    return this.http.put(`${this.url}/api/Auth/user/upload/`,id)
  }
}
