import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {ServiceCartItemComponent} from "./containers/service-cart-item.component";

@NgModule({
  declarations: [
    ServiceCartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ServiceCartItemComponent
  ]
})
export class ServiceCartItemModule {
}
