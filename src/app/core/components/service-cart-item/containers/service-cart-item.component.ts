import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceOutputDTO} from "../../../../shared/sdk";
import {BookingCartService} from "../../../../shared/services/booking-cart/booking-cart.service";

@Component({
  selector: 'app-service-cart-item',
  templateUrl: './service-cart-item.component.html',
  styleUrls: ['./service-cart-item.component.scss'],
})
export class ServiceCartItemComponent implements OnInit {

  @Input()
  service:ServiceOutputDTO;

  @Output()
  removeService: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  removeServiceFromCart(){
    this.removeService.emit(this.service);
  }

}
