import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundsBookingPageRoutingModule } from './refunds-booking-routing.module';

import { RefundsBookingPage } from './containers/refunds-booking.page';
import { CoreModule } from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoreModule,
    RefundsBookingPageRoutingModule
  ],
  declarations: [RefundsBookingPage]
})
export class RefundsBookingPageModule { }