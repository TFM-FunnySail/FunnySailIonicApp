import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StorageService} from "../storage/storage.service";
import {BookingCartModel} from "../../data/booking-cart";
import {ServiceOutputDTO} from "../../sdk";

@Injectable({
  providedIn: 'root'
})
export class BookingCartService {

  protected cart: BookingCartModel = {
    services:[]
  };
  public cartSubject: BehaviorSubject<BookingCartModel>;
  protected cartKey = 'bookingCart';

  constructor(protected storageService:StorageService) {
    const cartSaved = this.storageService.getItem(this.cartKey);
    this.cart = JSON.parse(cartSaved  ?? "[]");

    this.cartSubject = new BehaviorSubject<BookingCartModel>(this.cart);
  }

  getItemsCount(){
    let count = 0;

    count += this.cart.services.length;
    return count;
  }

  addService(service:ServiceOutputDTO){
    if(!this.exist(this.cart.services,service.id)){
      this.cart.services.push(service);
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

}
