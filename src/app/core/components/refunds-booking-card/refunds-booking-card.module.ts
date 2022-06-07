import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RefundsBookingCardComponent } from './containers/refunds-booking-card.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RefundsBookingCardComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
    ],
  exports: [
    RefundsBookingCardComponent
  ]
})
export class RefundsBookingCardModule {
}
