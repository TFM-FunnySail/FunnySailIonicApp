import { NgModule } from '@angular/core';
import { HeaderModule } from "./header/header.module";
import {ServiceCardModule} from "./service-card/service-card.module";

@NgModule({
  imports: [
    HeaderModule,
    ServiceCardModule,
  ],
  exports: [
    HeaderModule,
    ServiceCardModule,
  ]
})
export class ComponentsModule {
}
