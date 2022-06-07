import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RefundsBookingCardComponent } from './containers/refunds-booking-card.component';

@NgModule({
  declarations: [
    RefundsBookingCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RefundsBookingCardComponent
  ]
})
export class RefundsBookingCardModule {
}
