import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./containers/header.component";
import { RouterModule } from "@angular/router";
import {CartModule} from "../cart/cart.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
