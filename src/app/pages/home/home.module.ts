import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./containers/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class HomeModule {
}
