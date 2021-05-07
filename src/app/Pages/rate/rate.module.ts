import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatePageRoutingModule } from './rate-routing.module';

import { RatePage } from './rate.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RatePageRoutingModule
  ],
  declarations: [RatePage]
})
export class RatePageModule {}
