import { NgModule } from '@angular/core';
import { CardMenuModule } from './card-menu/card-menu.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from "./header/header.module";

@NgModule({
  imports: [
    HeaderModule,
    FooterModule,
    CardMenuModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    CardMenuModule,
  ]
})
export class ComponentsModule {
}
