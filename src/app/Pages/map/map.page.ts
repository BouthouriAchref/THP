import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from "leaflet";

// declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
  map: L.Map

  // map: any;
  // @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;
  constructor() {}

  ngOnInit() {
    this.map = L.map('map',{
      center: [ 25.3791924,55.4765436 ],
      zoom: 15,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    }).addTo(this.map)
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

}
