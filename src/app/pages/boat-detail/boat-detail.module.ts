import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatDetailPageRoutingModule } from './boat-detail-routing.module';

import { BoatDetailPage } from './containers/boat-detail.page';
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatDetailPageRoutingModule,
    CoreModule
  ],
  declarations: [BoatDetailPage]
})
export class BoatDetailPageModule {}
