import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./containers/footer.component";
import { ChatModule } from '../chat/chat.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    FooterComponent
  ],
    imports: [
        CommonModule,
        ChatModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        TranslateModule
    ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
