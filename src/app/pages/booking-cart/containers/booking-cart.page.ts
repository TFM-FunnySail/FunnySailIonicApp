import { Component, OnInit } from '@angular/core';
import {BookingCartService} from "../../../shared/services/booking-cart/booking-cart.service";
import {BookingCartModel} from "../../../shared/data/booking-cart";

@Component({
  selector: 'app-booking-cart',
  templateUrl: './booking-cart.page.html',
  styleUrls: ['./booking-cart.page.scss'],
})
export class BookingCartPage implements OnInit {

  bookingCart: BookingCartModel;

  constructor(protected bookingCartService: BookingCartService) {
    this.updateBookingCart();
  }

  ngOnInit() {
  }

  removeServiceFromCart(service){
    this.bookingCartService.removeService(service);
    this.updateBookingCart();
  }

  updateBookingCart(){
    this.bookingCart = this.bookingCartService.getCart();
  }
}
