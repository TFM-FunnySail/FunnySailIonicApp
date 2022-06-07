import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {PaymentComponent} from "./containers/payment.component";

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule {
}
