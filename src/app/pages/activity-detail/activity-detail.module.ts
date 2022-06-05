import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityDetailPageRoutingModule } from './activity-detail-routing.module';

import { ActivityDetailPage } from './containers/activity-detail.page';
import {ContactModule} from "../../core/components/contact/contact.module";
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityDetailPageRoutingModule,
    CoreModule
  ],
  declarations: [ActivityDetailPage]
})
export class ActivityDetailPageModule {}
