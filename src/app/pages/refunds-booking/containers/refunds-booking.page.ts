import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from "../../../shared/sdk";
import { StorageService } from '../../../shared/services/storage/storage.service';
import {
  BookingOutputDTO, BookingOutputDTOGenericResponseDTO, BookingService,
  RefundOutputDTO,
  RefundOutputDTOGenericResponseDTO,
  RefundsService
} from "../../../shared/sdk";

@Component({
  selector: 'app-refunds-booking',
  templateUrl: './refunds-booking.page.html',
  styleUrls: ['./refunds-booking.page.scss'],
})
export class RefundsBookingPage implements OnInit {

  public segment: string = "booking";
  error: string;
  displayedColumns: string[] = ['Description', 'Amount to Return', 'Date'];
  refunds: Array<RefundOutputDTO> = [];
  bookings: Array<BookingOutputDTO> = [];
  countRefunds = 0;
  countBookings = 0;
  show = 'true';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    protected userService: UsersService, private storageService: StorageService,
    protected refundsService: RefundsService, private bookingService: BookingService) {

  }

  ngOnInit(): void {
    const clientEmail = this.storageService.getItem("userEmail") as string;
    console.log(clientEmail);
    this.refundsService.apiRefundsGet(undefined, undefined, clientEmail).subscribe(resp => {
      console.log(resp);
      this.refunds = this.handlerRefunds(resp).items as Array<RefundOutputDTO>;
      this.countRefunds = this.refunds?.length as number;
      console.log(this.refunds);
    });

    const clientId = this.storageService.getItem("userId") as string;
    this.bookingService.apiBookingGet(undefined, clientId).subscribe(resp => {
      if (resp) {
        const items = this.handlerBookings(resp).items;
        console.log(items);
        if (items) {
          this.bookings = items;
          console.log(this.bookings);
          this.countBookings = this.bookings?.length as number;
        }
      }
    });
  }

  handlerRefunds(resp: RefundOutputDTOGenericResponseDTO) {
    return resp;
  }

  handlerBookings(resp: BookingOutputDTOGenericResponseDTO) {
    return resp;
  }

  segmentChanged($event: any) {
    this.segment = $event.detail.value;
  }

  
}
