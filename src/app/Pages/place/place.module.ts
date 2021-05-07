import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacePageRoutingModule } from './place-routing.module';

import { PlacePage } from './place.page';
import { NoticeModule } from 'src/app/Components/notice/notice.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacePageRoutingModule,
    NoticeModule
  ],
  declarations: [PlacePage]
})
export class PlacePageModule {}
