import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from "./containers/home.page";
import { HomePageRoutingModule } from "./home-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class HomePageModule {
}
