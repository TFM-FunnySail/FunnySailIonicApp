import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {ActivityCartItemComponent} from "./containers/activity-cart-item.component";

@NgModule({
  declarations: [
    ActivityCartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ActivityCartItemComponent
  ]
})
export class ActivityCartItemModule {
}
