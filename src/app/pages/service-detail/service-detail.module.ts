import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailPageRoutingModule } from './service-detail-routing.module';

import { ServiceDetailPage } from './containers/service-detail.page';
import {ContactModule} from "../../core/components/contact/contact.module";
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDetailPageRoutingModule,
    CoreModule
  ],
  declarations: [ServiceDetailPage]
})
export class ServiceDetailPageModule {}
