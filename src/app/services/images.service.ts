import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  url = environment.url;
  constructor(private transfer: FileTransfer, private Http: HttpClient) { }

  getImage(id) {
    return this.Http.get(`${this.url}api/Auth/user/getAvatar/${id}`);
  }
  
  uploadImage(img ,id){
    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/from-data'
    }
    const FileTransfer = this.transfer.create();
    return FileTransfer.upload(img,`${this.url}/api/Auth/user/getAvatar/${id}`,options)
  }
}
