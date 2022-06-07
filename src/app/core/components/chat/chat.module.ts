import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from "./containers/chat.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ChatComponent
  ],
    imports: [
        CommonModule,
        TranslateModule
    ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule {
}
