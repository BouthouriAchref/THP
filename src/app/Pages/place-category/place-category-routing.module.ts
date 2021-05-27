import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceCategoryPage } from './place-category.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceCategoryPageRoutingModule {}
