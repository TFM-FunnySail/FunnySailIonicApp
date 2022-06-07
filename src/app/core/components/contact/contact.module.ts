import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import {ContactComponent} from "./containers/contact.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ContactComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule {
}
