import { NgModule } from '@angular/core';
import { CardMenuModule } from './card-menu/card-menu.module';
import { CommentModule } from './comment/comment.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from "./header/header.module";

@NgModule({
  imports: [
    HeaderModule,
    FooterModule,
    CardMenuModule,
    CommentModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    CardMenuModule,
    CommentModule,
  ]
})
export class ComponentsModule {
}
