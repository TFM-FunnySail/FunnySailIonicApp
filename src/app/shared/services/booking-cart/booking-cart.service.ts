import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StorageService} from "../storage/storage.service";
import {BookingCartModel} from "../../data/booking-cart";
import { BoatOutputDTO, ServiceOutputDTO, ActivityOutputDTO} from "../../sdk";

@Injectable({
  providedIn: 'root'
})
export class BookingCartService {

  protected cart: BookingCartModel = {
      services: [],
      boats: [],
      activities: [],
  };
  public cartSubject: BehaviorSubject<BookingCartModel>;
  protected cartKey = 'bookingCart';

  constructor(protected storageService:StorageService) {
    this.cart = this.getCart();

    this.cartSubject = new BehaviorSubject<BookingCartModel>(this.cart);
  }

  getItemsCount(){
    let count = 0;

    count += this.cart.services?.length ?? 0;
    count += this.cart.boats?.length ?? 0;
    count += this.cart.activities?.length ?? 0;
    return count;
  }

  addService(service:ServiceOutputDTO){
    if(!this.exist(this.cart.services,service.id)){
      this.cart.services.push(service);
      this.saveCart();
    }
  }

  addActivity(activity: ActivityOutputDTO) {
    if (!this.exist(this.cart.activities, activity.id)) {
      this.cart.activities.push(activity);
      this.saveCart();
    }
  }

  private exist(items: any[], id: number) {
    return items.some(x=>parseInt(x.id) === id);
  }

  saveCart(){
    this.storageService.setItemAndParse(this.cartKey,this.cart);
    this.cartSubject.next(this.cart);
  }

  addBoat(boat:BoatOutputDTO,initialDate:string,endDate:string,requestCaptain:boolean){
    if(!this.exist(this.cart.boats,boat.id)){
      this.cart.boats.push({
        boatData:boat,
        initialDate,
        endDate,
        requestCaptain
      });
      this.saveCart();
    }
  }

  getCart(){
    const cartSaved = this.storageService.getItem(this.cartKey);
    return JSON.parse(cartSaved  ?? JSON.stringify(this.cart));
  }

  removeService(service: ServiceOutputDTO) {
    const index = this.cart.services.findIndex(x=>x.id == service.id);
    if(index >= 0){
      this.cart.services.splice(index,1);
      this.saveCart();
    }
  }

  removeBoat(boat: BoatOutputDTO) {
    const index = this.cart.boats.findIndex(x=>x.boatData.id == boat.id);
    if(index >= 0){
      this.cart.boats.splice(index,1);
      this.saveCart();
    }
  }
}
