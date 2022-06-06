import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingCartPageRoutingModule } from './booking-cart-routing.module';

import { BookingCartPage } from './containers/booking-cart.page';
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingCartPageRoutingModule,
    CoreModule
  ],
  declarations: [BookingCartPage]
})
export class BookingCartPageModule {}
