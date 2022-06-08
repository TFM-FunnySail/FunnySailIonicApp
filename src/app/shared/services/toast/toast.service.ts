import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(protected toastController: ToastController) { }

  async showInfo(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color:'success'
    });
    toast.present();
  }

  async showError(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color:'danger',
    });
    toast.present();
  }
}
