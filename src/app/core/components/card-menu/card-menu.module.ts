import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardMenuComponent} from "./containers/card-menu.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CardMenuComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    CardMenuComponent
  ]
})
export class CardMenuModule {
}
