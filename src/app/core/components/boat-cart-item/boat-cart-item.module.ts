import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {BoatCartItemComponent} from "./containers/boat-cart-item.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    BoatCartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BoatCartItemComponent
  ]
})
export class BoatCartItemModule {
}
