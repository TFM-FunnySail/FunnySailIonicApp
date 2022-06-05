import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {BoatCardComponent} from "./containers/boat-card.component";

@NgModule({
  declarations: [
    BoatCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BoatCardComponent
  ]
})
export class BoatCardModule {
}
