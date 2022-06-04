import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule
  ],
  exports: [
    IonicModule,
    CommonModule,
    ComponentsModule
  ]
})
export class CoreModule {
}
