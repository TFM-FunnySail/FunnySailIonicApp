import { NgModule } from '@angular/core';
import {ApiImagePipe} from "./pipes/apiImage/api-image.pipe";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
  ],
  declarations: [ApiImagePipe],
  exports: [
    CommonModule,
    RouterModule,
    ApiImagePipe,
  ],

})
export class SharedModule {
}
