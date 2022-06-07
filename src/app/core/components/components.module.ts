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
import {ServiceCartItemModule} from "./service-cart-item/service-cart-item.module";
import {BoatCartItemComponent} from "./boat-cart-item/containers/boat-cart-item.component";
import {BoatCartItemModule} from "./boat-cart-item/boat-cart-item.module";
import {ActivityCartItemModule} from "./activity-cart-item/activity-cart-item.module";
import { CarouselModule } from './carousel/carousel.module';
import { ChatModule } from './chat/chat.module';
import { RefundsModule } from './refunds/refunds.module';
import { RefundsBookingCardModule } from './refunds-booking-card/refunds-booking-card.module';

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
    ServiceCartItemModule,
    BoatCartItemModule,
    ActivityCartItemModule,
    CarouselModule,
    ChatModule,
    RefundsModule,
    RefundsBookingCardModule,
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
    ServiceCartItemModule,
    BoatCartItemModule,
    ActivityCartItemModule,
    CarouselModule,
    ChatModule,
    RefundsModule,
    RefundsBookingCardModule,
  ]
})
export class ComponentsModule {
}
