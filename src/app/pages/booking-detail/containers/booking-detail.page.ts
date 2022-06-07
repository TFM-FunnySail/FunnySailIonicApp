import { Component, OnInit } from '@angular/core';
import {BookingOutputDTO, BookingService} from "../../../shared/sdk";
import {ActivatedRoute} from "@angular/router";
import {BoatBookingCartModel} from "../../../shared/data/booking-cart";
import {format, parseISO} from "date-fns";
import {AlertController} from "@ionic/angular";

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
  canBeCanceled: boolean = false;
  canBePaid: boolean = false;
  constructor(protected bookingService: BookingService,
              protected router: ActivatedRoute,
              protected alertController:AlertController) { }

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
          name:b.name,
          boatResources:b.boatResources
        }
      }
    });
    this.totalAmount = resp.clientInvoiceLine.totalAmount;
    this.handlerStatus(resp);
    return resp;
  }

  formatDate(value: string) {
    if(!value || value === '')
      return '';

    return format(parseISO(value), 'MMM dd yyyy');
  }

  async cancel() {
    await this.cancelAlertConfirm();
  }

  async pay() {
    await this.presentAlertPrompt();
  }

  async cancelAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Confirmar',
      message: '¿Está seguro que desea <strong>cancelar</strong> la orden?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.cancelOrder();
          }
        }
      ]
    });

    await alert.present();
  }

  private cancelOrder() {
    this.bookingService.apiBookingIdCancelPut(this.id).subscribe(resp=>{
      console.log(resp);
      this.booking.status = 'Cancelled';
      this.handlerStatus(this.booking);
    },err=>{
      console.log(err);
    })
  }

  private handlerStatus(resp: BookingOutputDTO) {
    this.canBeCanceled = resp.status !== 'Cancelled' && resp.status !== 'Completed';
    this.canBePaid = resp.status !== 'Cancelled' && !resp.paid;
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Datos de pagos',
      inputs: [
        {
          name: 'Tarjeta',
          type: 'text',
          placeholder: 'xxxx xxxx xxxx xxxx',
        },
        {
          name: 'CVV',
          type: 'text',
          placeholder: 'cvv',
          attributes:{
            maxLength:4,
            minLength:3,
          }
        },
        {
          name: 'Expiración',
          type: 'text',
          placeholder: '05/26',
          attributes:{
            maxLength:5,
            minLength:5,
          }
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Pagar',
          handler: (resp) => {
            console.log('Confirm Ok',resp);
            this.payOrder();
          }
        }
      ]
    });

    await alert.present();
  }

  private payOrder() {
    this.bookingService.apiBookingIdPayPut(this.id).subscribe(resp=>{
      console.log(resp);
      this.booking.paid = true;
      this.booking.status = 'Rented';
      this.handlerStatus(this.booking);
    },err=>{
      console.log(err);
    })
  }
}
