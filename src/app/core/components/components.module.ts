import { NgModule } from '@angular/core';
import { HeaderModule } from "./header/header.module";
import {ServiceCardModule} from "./service-card/service-card.module";
import {ContactModule} from "./contact/contact.module";

@NgModule({
  imports: [
    HeaderModule,
    ServiceCardModule,
    ContactModule,
  ],
  exports: [
    HeaderModule,
    ServiceCardModule,
    ContactModule,
  ]
})
export class ComponentsModule {
}
