import { Component, Input, OnInit } from '@angular/core';
import { BookingOutputDTO } from "../../../../shared/sdk";

@Component({
  selector: 'refunds-booking-card',
  templateUrl: './refunds-booking-card.component.html',
  styleUrls: ['./refunds-booking-card.component.scss']
})
export class RefundsBookingCardComponent implements OnInit {

  @Input() booking: BookingOutputDTO = {};
  name: string = 'Reserva ';
  fechaReserva: string = '';
  precioTotal: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.name += this.booking.id as unknown as string;
    this.fechaReserva = this.booking.createdDate;
    this.precioTotal = this.booking.clientInvoiceLine.totalAmount;
  }

}
