import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject ,FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = environment.url;
  id : any;

  ProfileSubject = new Subject();
  ProfileSubjectEvent = this.ProfileSubject.asObservable();

  constructor(private http: HttpClient, private transfer: FileTransfer) { }

  findUserById(id){
    this.findUserByID(id);
    return this.http.get<any>(`${this.url}/api/Auth/user/${id}`)
  }

  findUserByID(id){
    this.http.get<any>(`${this.url}/api/Auth/user/${id}`).subscribe(response => {
      this.ProfileSubject.next(response)
       console.log('__in service_',response)
      return response
    })
  }

  updateAvatar(id){
    return this.http.put(`${this.url}/api/Auth/user/upload/`,id)
  }

  updateProfile(id, crendentials){
    //console.log(crendentials)

    this.http.put<any>(`${this.url}/api/Auth/user/editProfile/${id}`,crendentials).subscribe(response => {
      this.ProfileSubject.next(response.result);
      //console.log('___',response.result)
      return response;
    })
  }

  uploadImage(id, img){
    let path = this.url+'/api/Auth/upload/'+id;
    var targetPath = img;

    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data'
    };

    const fileTransfer: FileTransferObject = this.transfer.create();

    return fileTransfer.upload(targetPath,path,options)
  }
}
