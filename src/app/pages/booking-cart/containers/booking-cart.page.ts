import { Component, OnInit } from '@angular/core';
import {BookingCartService} from "../../../shared/services/booking-cart/booking-cart.service";
import {BookingCartModel} from "../../../shared/data/booking-cart";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {BookingService} from "../../../shared/sdk";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-cart',
  templateUrl: './booking-cart.page.html',
  styleUrls: ['./booking-cart.page.scss'],
})
export class BookingCartPage implements OnInit {

  bookingCart: BookingCartModel;
  total:number = 0;
  form:FormGroup;
  error: string= '';
  notPaiyment:boolean = false;

  constructor(protected bookingCartService: BookingCartService,
              private formBuilder: FormBuilder,
              protected storageService: StorageService,
              protected bookingService: BookingService,
              protected router:Router) {
    this.updateBookingCart();
    this.form = this.formBuilder.group({
      totalPeople: new FormControl('1',[Validators.required])
    });
  }

  ngOnInit() {
  }

  removeServiceFromCart(service){
    this.bookingCartService.removeService(service);
    this.updateBookingCart();
  }

  updateBookingCart(){
    this.bookingCart = this.bookingCartService.getCart();
    //Calculo del total
    this.total = 0;
    this.bookingCart.activities.map(x=>this.total += x.price);
    this.bookingCart.services.map(x=>this.total += x.price);
    this.bookingCart.boats.map(x=>this.total += x.boatData.price);

    this.notPaiyment = this.bookingCart.activities.length === 0 && this.bookingCart.services.length === 0
                        && this.bookingCart.boats.length === 0;
  }

  removeBoatFromCart(boat){
    this.bookingCartService.removeBoat(boat);
    this.updateBookingCart();
  }

  removeActivityFromCart(activity){
    this.bookingCartService.removeActivity(activity);
    this.updateBookingCart();
  }

  booking() {
    if(!this.form.invalid){
      this.error = '';
      let form = {
        clientId: this.storageService.getItem("userId"),
        totalPeople: parseInt(this.form.get("totalPeople").value),
        serviceIds:this.bookingCart.services.map(x=>x.id),
        activityIds:this.bookingCart.activities.map(x=>x.id),
        boats: this.bookingCart.boats.map(x=> {
          return {
            boatId:x.boatData.id,
            requestCaptain:x.requestCaptain,
            entryDate:x.initialDate,
            departureDate:x.endDate,
          }
        })
      }

      console.log(form);
      this.bookingService.apiBookingPost(form).subscribe(resp=>{
        console.log(resp);
        this.bookingCartService.cleanCart();
        this.router.navigate(['booking/' + resp.id]);
      },err=>{
          console.log('error',err);
          this.error = err.error.esMessage ?? err.message;
      });
    }

  }
}
