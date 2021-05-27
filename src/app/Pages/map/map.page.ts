import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder";
import { PopUpService } from 'src/app/services/pop-up.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {
  map: Leaflet.Map;
  properties: any;
  categories: any;
  caseStatus;
  arrayTest = ['a', 'b', 'v', 'h'];
  isOpened = false;
  credentialsForm: FormGroup;


  constructor(
    private popupService: PopUpService, private placeService: PlaceService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.time('aa')
    this.popupService.getAllPlaces().subscribe(async (res) => {
      if (res.success) {
        this.properties = await res.data;
        console.log('all',this.properties)
        this.initData();
      }
    });
    this.placeService.getAllCategory().subscribe(async (res) => {
      this.categories = await res.category
      console.log('cat',this.categories)
    })  
    this.credentialsForm = this.formBuilder.group({
      category: new FormControl('', [Validators.required])

    });
    
  }

  open() {
    this.isOpened = !this.isOpened
  }

  selectCat(){
    let id = this.credentialsForm.value.category;
    this.placeService.getPlacesByCat(id).subscribe(async res => {
      this.properties = await res.data;
      //this.initData();
      console.log('allcat',this.properties)
    })
  }

  selectChangeHandlerCat(event) {
    this.credentialsForm.controls['category'].setValue(event.target.value);
    //return event.target.value;
    
  }

  async initData() {
    // console.timeEnd('aa')
    this.map = new Leaflet.Map('map').setView([33.8869, 9.5375], 7)
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom: 6, maxZoom: 20 }).addTo(this.map);
    //console.log("_________", el[index].Evaluation.Notice)
    //console.log("places",this.properties)
    for (let place of await this.properties) {
      //console.log('________',place.Address.Location)
      // this.properties.map((place) => {

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

      if ((place.Evaluation.Notice <= 2) || (place.Evaluation.Notice == null)) {
        this.caseStatus = One
      } else {
        this.caseStatus = Two
      }

      const circle = Leaflet.marker([place.Address.Location.Lon, place.Address.Location.Lat], { icon: this.caseStatus });
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

}

