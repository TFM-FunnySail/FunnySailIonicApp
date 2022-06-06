import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService} from "../../../shared/sdk";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {BookingCartService} from "../../../shared/services/booking-cart/booking-cart.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-boat-detail',
  templateUrl: './boat-detail.page.html',
  styleUrls: ['./boat-detail.page.scss'],
})
export class BoatDetailPage implements OnInit {

  boat: BoatOutputDTO;
  boatId: any;
  initialDate: any;
  endDate: any;
  mainImage:string = '';
  requireCaptain:boolean = false;

  constructor(
    protected boatsApiService: BoatsService,
    protected activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router,
    protected bookingCartService:BookingCartService,
    protected alertController: AlertController
  ) {
    this.boat={};
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(parameters => {
      console.log('parameters',parameters);
      this.boatId = parameters['id'] as string;
      this.initialDate = parameters['initialDate'];
      this.endDate = parameters['endDate'];
      if (this.boatId) {
        this.boatsApiService.apiBoatsIdGet(parseInt(this.boatId),this.initialDate,this.endDate).subscribe((resp: BoatOutputDTO) => {
            console.log('detalles del barco',resp);
            this.boat = resp;
            this.mainImage = resp.boatResources.find(x=>x.main)?.uri ??
            resp.boatResources.length > 0 ? resp.boatResources[0].uri : '';
          }
        );
      }
    });
  }

  async booking(){
    if (this.boat) {
      await this.presentAlertConfirm();
    }
  }

  bookingAction(){
    this.bookingCartService.addBoat(this.boat,this.initialDate,this.endDate,this.requireCaptain);
    this.router.navigate(['/boats']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>¿Necesita capitán?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.requireCaptain = false;
            this.bookingAction();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.requireCaptain = true;
            this.bookingAction();
          }
        }
      ]
    });

    await alert.present();
  }

}
