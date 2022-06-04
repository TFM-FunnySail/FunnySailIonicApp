import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatsPageRoutingModule } from './boats-routing.module';

import { BoatsPage } from './containers/boats.page';
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BoatsPageRoutingModule,
    CoreModule
  ],
  declarations: [BoatsPage]
})
export class BoatsPageModule {}
