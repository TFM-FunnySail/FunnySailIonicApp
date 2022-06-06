import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from "./containers/carousel.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule {
}
