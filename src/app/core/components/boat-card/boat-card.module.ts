import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {BoatCardComponent} from "./containers/boat-card.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    BoatCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
  exports: [
    BoatCardComponent
  ]
})
export class BoatCardModule {
}
