import { Component, OnInit } from '@angular/core';
import {BookingCartService} from "../../../../shared/services/booking-cart/booking-cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  numberOfItem: number = 0;
  constructor(protected bookingCartService: BookingCartService) {

  }

  ngOnInit(): void {
    this.bookingCartService.cartSubject.subscribe((event)=>{
      this.numberOfItem = this.bookingCartService.getItemsCount();
    });
  }

}
