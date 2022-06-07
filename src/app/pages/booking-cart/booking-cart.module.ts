import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingCartPageRoutingModule } from './booking-cart-routing.module';

import { BookingCartPage } from './containers/booking-cart.page';
import {CoreModule} from "../../core/core.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        BookingCartPageRoutingModule,
        CoreModule,
        TranslateModule,
    ],
  declarations: [BookingCartPage]
})
export class BookingCartPageModule {}
