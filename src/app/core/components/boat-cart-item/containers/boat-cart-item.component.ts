import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoatOutputDTO, ServiceOutputDTO} from "../../../../shared/sdk";
import {BoatBookingCartModel} from "../../../../shared/data/booking-cart";
import {format, parseISO} from "date-fns";

@Component({
  selector: 'app-boat-cart-item',
  templateUrl: './boat-cart-item.component.html',
  styleUrls: ['./boat-cart-item.component.scss'],
})
export class BoatCartItemComponent implements OnInit {

  @Input()
  boatBooking:BoatBookingCartModel;

  @Output()
  removeBoat: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  removeBoatFromCart(){
    this.removeBoat.emit(this.boatBooking.boatData);
  }

  getImage() {
    return this.boatBooking.boatData.boatResources.find(x=>x.main)?.uri ??
    this.boatBooking.boatData.boatResources.length > 0 ? this.boatBooking.boatData.boatResources[0].uri : '';
  }

  formatDate(value: string) {
    if(!value || value === '')
      return '';

    return format(parseISO(value), 'MMM dd yyyy');
  }
}
