import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RefundsComponent} from "./containers/refunds.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RefundsComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
    ],
  exports: [
    RefundsComponent
  ]
})
export class RefundsModule {
}
