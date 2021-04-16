import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder";
import { PopUpService } from 'src/app/services/pop-up.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {
  map: Leaflet.Map;
  properties: any;
  caseStatus;
  arrayTest = ['a', 'b', 'v', 'h'];
  isOpened= false;
 

  constructor(
    private popupService: PopUpService) {

  }

  ngOnInit() {
    this.popupService.getAllPlaces().subscribe((res) => {
      if (res.success) {
        this.properties = res.data;
        //console.log(res.data[0].Address.Location.Lat)
      }
      
      
      //console.log(this.properties[0].Address.Location)

    });
  }

  open(){
    this.isOpened= !this.isOpened
  }

  ionViewDidEnter() {

    this.map = new Leaflet.Map('map').setView([33.8869, 9.5375], 7)
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom: 6, maxZoom: 20 }).addTo(this.map);

    // this.properties.map((el, index) => {
      //console.log("_________", el[index].Evaluation.Notice)
    for (let place of this.properties){
      //console.log('________',place.Address.Location)
    

      var One = new Leaflet.Icon({
        iconUrl: '../../assets/red-marker.png',
        shadowUrl: '../../assets/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      var Two = new Leaflet.Icon({
        iconUrl: '../../assets/green-marker.png',
        shadowUrl: '../../assets/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      if (place.Evaluation.Notice <= 2) {
        this.caseStatus = One
      } else {
        this.caseStatus = Two
      }

      const circle = Leaflet.marker([place.Address.Location.Lat, place.Address.Location.Lon], { icon: this.caseStatus });//.addTo(this.map)
      circle.bindPopup(this.popupService.makeCapitalPopup(place));
      circle.addTo(this.map);
    }

  }



  // ionViewDidEnter(){
  //   this.showMap();
  // }
  // showMap(){
  //   const location = new google.maps.LatLng(-17.824858 , 31.053028);
  //   const options = {
  //     center: location,
  //     zoom: 15,
  //     disableDefaultUI: true
  //   }
  //   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  // }

  // `
  // <ion-buttons>
  //   <h1>
  //     <b> ${place.title}</b>
  //   </h1>
  //   <ion-button>
  //     <ion-icon routerLink='/menu/profile' style=' font-size: 34px; color: #ff3838' name="heart-circle"></ion-icon>
  //   </ion-button>
  // </ion-buttons>

  // <ng-template [ngFor]="let a  of [1 ,2 ,3 ,4, 5 ]">
  // </ng-template>

  // <ion-icon style='color: #f2994a' name='star'></ion-icon>
  // <ion-icon style='color: #f2994a' name='star-outline'></ion-icon>
  // <p>${place.description}</p>
  // <img src='${place.image}' />



  // `


  //button ma teb3athch 
  //" <ion-button  routerLink=  "+"/edit-profile"+">Edit your profile</ion-button> <h1> <b> "+place.title+" </b> </h1><b *ngFor='let item of 5'> <ion-icon style='color: #f2994a' name='star'></ion-icon></b> <ion-icon style='color: #f2994a' name='star-outline'></ion-icon> <p>"+place.description+"</p> <img src='"+place.image+"' />" 
  //"<h1> <b> "+place.title+" </b> </h1> <b ng-repeat=" i in 5"> <ion-icon style='color: #f2994a' name='star'></ion-icon></b> <ion-icon style='color: #f2994a' name='star-outline'></ion-icon> <p>"+place.description+"</p> <img src='"+place.image+"' />" 

  // "tesje suis "+this.test+"!!"
  // "<li *ngFor='let item of bookList; let i = index;'>{{item.name}}6666</li>"
  //` <ion-button  ${routerLink=} /edit-profile>Edit your profile</ion-button> <h1> <b> ${place.title} </b> </h1><b *ngFor='let item of 5'> <ion-icon style='color: #f2994a' name='star'></ion-icon></b> <ion-icon style='color: #f2994a' name='star-outline'></ion-icon> <p>${place.description}</p> <img src='${place.image}' />` 
  // "<h1><b>"+place.title+"</b></h1> <li *ngFor='let item of [1,2,3,6,7]'>uuuuuuuuu</li> <ion-icon style='color: #f2994a' name='star-outline'></ion-icon> <p>"+place.description+"</p> <img src='"+place.image+"' />" 
}
