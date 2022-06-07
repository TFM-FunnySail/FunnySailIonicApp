import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingDetailPageRoutingModule } from './booking-detail-routing.module';

import { BookingDetailPage } from './containers/booking-detail.page';
import {CoreModule} from "../../core/core.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookingDetailPageRoutingModule,
        CoreModule,
        TranslateModule
    ],
  declarations: [BookingDetailPage]
})
export class BookingDetailPageModule {}
