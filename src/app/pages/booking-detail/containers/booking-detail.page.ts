import { Component, OnInit } from '@angular/core';
import {BookingOutputDTO, BookingService} from "../../../shared/sdk";
import {ActivatedRoute} from "@angular/router";
import {BoatBookingCartModel} from "../../../shared/data/booking-cart";

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['./booking-detail.page.scss'],
})
export class BookingDetailPage implements OnInit {

  id:number = 0;
  booking?: BookingOutputDTO | null = {};
  boatsBooking: BoatBookingCartModel[] = [];
  totalAmount: number = 0;
  constructor(protected bookingService: BookingService,
              protected router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params["id"];
      this.bookingService.apiBookingIdGet(this.id).subscribe(resp => {
        this.booking = this.handlerBookingResp(resp);
        console.log(this.booking);
      });
    })
  }

  private handlerBookingResp(resp: BookingOutputDTO) {
    this.boatsBooking = resp.boatBookings.map(b=>{
      return {
        endDate: b.departureDate,
        initialDate:b.departureDate,
        requestCaptain:b.requestCaptain,
        boatData:{
          price:b.price,
          id:b.id,
          name:b.name
        }
      }
    });
    this.totalAmount = resp.clientInvoiceLine.totalAmount;
    return resp;
  }
}
