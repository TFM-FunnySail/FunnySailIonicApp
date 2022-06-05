import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {CartComponent} from "./containers/cart.component";

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule {
}
