import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {BoatsFilterComponent} from "./containers/boats-filter.component";

@NgModule({
  declarations: [
    BoatsFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BoatsFilterComponent
  ]
})
export class BoatsFilterModule {
}
