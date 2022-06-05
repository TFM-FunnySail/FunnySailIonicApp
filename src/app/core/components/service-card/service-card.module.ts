import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {ServiceCardComponent} from "./containers/service-card.component";

@NgModule({
  declarations: [
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ServiceCardComponent
  ]
})
export class ServiceCardModule {
}
