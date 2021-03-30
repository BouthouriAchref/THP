import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  sliderConfig = {
    centeredSlides: true,
    spaceBetween: -60,
    slidesPerView: 1.1,
  };

  categoriesSliderConfig = {
    slidesPerView: 2.5,
  };

  public categories = [];
  public places = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    //throw new Error('Method not implemented.');
    this.categories = this.data.getCategories();
    this.places = this.data.getPlaces();
    for (let place of this.places){
      place.noteArray.length  = place.note; 
      place.noteArray2.length  = ( 5 - place.note );
    }    
  }

}
