import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefundsBookingPage } from './containers/refunds-booking.page';

const routes: Routes = [
  {
    path: '',
    component: RefundsBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundsBookingPageRoutingModule {}
