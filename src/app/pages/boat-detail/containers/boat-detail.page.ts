import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService} from "../../../shared/sdk";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {BookingCartService} from "../../../shared/services/booking-cart/booking-cart.service";

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

  constructor(
    protected boatsApiService: BoatsService,
    protected activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router,
    protected bookingCartService:BookingCartService
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

  booking(){
    if (this.boat) {
      //El valor false esta provisional
      this.bookingCartService.addBoat(this.boat,this.initialDate,this.endDate,false);
      this.router.navigate(['/boats']);
    }
  }

}
