import { NgModule } from '@angular/core';
import { HeaderModule } from "./header/header.module";
import {ServiceCardModule} from "./service-card/service-card.module";
import {ContactModule} from "./contact/contact.module";
import {CartModule} from "./cart/cart.module";

@NgModule({
  imports: [
    HeaderModule,
    ServiceCardModule,
    ContactModule,
    CartModule,
  ],
  exports: [
    HeaderModule,
    ServiceCardModule,
    ContactModule,
    CartModule,
  ]
})
export class ComponentsModule {
}
