import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-category',
  templateUrl: './place-category.page.html',
  styleUrls: ['./place-category.page.scss'],
})
export class PlaceCategoryPage implements OnInit {
  id: any;
  credentialsForm: FormGroup;
  categories: any;
  category: any;
  Page: String = "ppc";
  Places :any;
  constructor(private formBuilder: FormBuilder,private placeService: PlaceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log('id', this.id)
    });
    this.placeService.getPlacesByCat(this.id).subscribe(async res => {
      this.Places = await res.data;
      console.log(this.Places)
    })
    this.placeService.getCategoryById(this.id).subscribe(async res => {
      this.category = await res.data;
    })

    this.placeService.getAllCategory().subscribe(async (res) => {
      this.categories = await res.category
      //console.log('cat',this.categories)
    })  

    this.credentialsForm = this.formBuilder.group({
      category: new FormControl('', [Validators.required])

    });
  }

  onclick(){
    this.router.navigate(['/menu/home'])
  }
  
  selectChangeHandlerCat(event) {
    this.credentialsForm.controls['category'].setValue(event.target.value);
    //return event.target.value;
    
  }

  selectPlace(id,Page){
    this.router.navigate(['/place', {id,Page}]).then();
  }

  selectCat(){
    let id = this.credentialsForm.value.category;
    this.router.navigate(['/place-category',{id}]).then();
  }

}
