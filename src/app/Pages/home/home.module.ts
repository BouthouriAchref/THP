import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { NoticeModule } from 'src/app/Components/notice/notice.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    NoticeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
