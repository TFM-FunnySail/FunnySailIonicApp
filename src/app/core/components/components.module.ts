import { NgModule } from '@angular/core';
import { HeaderModule } from "./header/header.module";
import {ServiceCardModule} from "./service-card/service-card.module";
import {BoatsFilterModule} from "./boats-filter/boats-filter.module";
import {ContactModule} from "./contact/contact.module";
import {CartModule} from "./cart/cart.module";
import {BoatCardModule} from "./boat-card/boat-card.module";

@NgModule({
  imports: [
    HeaderModule,
    ServiceCardModule,
    ContactModule,
    CartModule,
    BoatsFilterModule,
    BoatCardModule
  ],
  exports: [
    HeaderModule,
    ServiceCardModule,
    ContactModule,
    CartModule,
    BoatsFilterModule,
    BoatCardModule
  ]
})
export class ComponentsModule {
}
