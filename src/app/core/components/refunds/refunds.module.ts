import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RefundsComponent} from "./containers/refunds.component";

@NgModule({
  declarations: [
    RefundsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RefundsComponent
  ]
})
export class RefundsModule {
}
