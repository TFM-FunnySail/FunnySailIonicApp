import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesPageRoutingModule } from './services-routing.module';

import { ServicesPage } from './containers/services.page';
import {CoreModule} from "../../core/core.module";
import {ServiceCardModule} from "../../core/components/service-card/service-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ServicesPageRoutingModule,
    CoreModule
  ],
  declarations: [ServicesPage]
})
export class ServicesPageModule {}