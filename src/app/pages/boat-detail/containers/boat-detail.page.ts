import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService} from "../../../shared/sdk";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage/storage.service";

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
    private router: Router
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
    const id = this.boatId;
    if (id) {

      this.router.navigate(['/boats']);
    }
  }

}
