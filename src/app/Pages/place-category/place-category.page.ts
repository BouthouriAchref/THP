import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-category',
  templateUrl: './place-category.page.html',
  styleUrls: ['./place-category.page.scss'],
})
export class PlaceCategoryPage implements OnInit {
  id: any;
  category: any;
  Page: String = "ppc";
  Places :any;
  constructor(private placeService: PlaceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id)
    });
    this.placeService.getPlacesByCat(this.id).subscribe(async res => {
      this.Places = await res.data;
      console.log(this.Places)
    })
    this.placeService.getCategoryById(this.id).subscribe(async res => {
      this.category = await res.data;
    })
  }

  onclick(){
    this.router.navigate(['/menu/home'])
  }
  
  selectPlace(id,Page){
    this.router.navigate(['/place', {id,Page}]).then();
  }

}
