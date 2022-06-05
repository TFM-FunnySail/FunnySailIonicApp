import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {BoatsFilterComponent} from "./containers/boats-filter.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    BoatsFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    BoatsFilterComponent
  ]
})
export class BoatsFilterModule {
}
