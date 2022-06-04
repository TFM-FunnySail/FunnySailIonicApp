import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from "./header/header.module";

@NgModule({
  imports: [
    HeaderModule,
    FooterModule
  ],
  exports: [
    HeaderModule,
    FooterModule
  ]
})
export class ComponentsModule {
}
