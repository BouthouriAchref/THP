import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceCategoryPageRoutingModule } from './place-category-routing.module';

import { PlaceCategoryPage } from './place-category.page';
import { NoticeModule } from 'src/app/Components/notice/notice.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceCategoryPageRoutingModule,
    NoticeModule
  ],
  declarations: [PlaceCategoryPage]
})
export class PlaceCategoryPageModule {}
