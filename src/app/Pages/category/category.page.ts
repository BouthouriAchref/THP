import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: any;

  categoriesSliderConfig = {
    slidesPerView: 2.5,
  };
  constructor(private place: PlaceService, private router: Router) { }

  ngOnInit() {
    this.place.getAllCategory().subscribe(async (res) => {
      this.categories = await res.category
      console.log('cat',this.categories)
    })  
  }


  selectCategory(id){
    this.router.navigate(['/place-category',{id}]).then();
  }

  onclick(){
    this.router.navigate(['/menu/home'])
  }
}
