import { NgModule } from '@angular/core';
import { CardMenuModule } from './card-menu/card-menu.module';
import { CommentModule } from './comment/comment.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from "./header/header.module";
import {ServiceCardModule} from "./service-card/service-card.module";
import {BoatsFilterModule} from "./boats-filter/boats-filter.module";
import {ContactModule} from "./contact/contact.module";
import {CartModule} from "./cart/cart.module";
import {BoatCardModule} from "./boat-card/boat-card.module";
import { ActivityCardModule } from './activity-card/activity-card.module';
import { CarouselModule } from './carousel/carousel.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  imports: [
    HeaderModule,
    ServiceCardModule,
    ActivityCardModule,
    ContactModule,
    CartModule,
    BoatsFilterModule,
    BoatCardModule,
    FooterModule,
    CardMenuModule,
    CommentModule,
    CarouselModule,
    ChatModule,
  ],
  exports: [
    HeaderModule,
    ServiceCardModule,
    ActivityCardModule,
    ContactModule,
    CartModule,
    BoatsFilterModule,
    BoatCardModule,
    FooterModule,
    CardMenuModule,
    CommentModule,
    CarouselModule,
    ChatModule,
  ]
})
export class ComponentsModule {
}
