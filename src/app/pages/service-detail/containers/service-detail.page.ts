import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceOutputDTO, ServicesService} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {BookingCartService} from "../../../shared/services/booking-cart/booking-cart.service";

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {

  exist = false;
  service: ServiceOutputDTO;

  constructor(private activatedRoute: ActivatedRoute,
              private servicesService: ServicesService,
              private storageService: StorageService,
              private router: Router,
              protected bookingCartService:BookingCartService) {
    this.service = {
      id: -1,
      name: '',
      active: false,
      price: 0,
      description: ''
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameters => {
      let id = parameters['id'] as number;
      this.servicesService.apiServicesIdGet(id).subscribe(resp => {
        if(resp){
          this.exist = true;
          this.service = resp;
        }
      });
    });
  }

  booking(){
    const id = this.service.id;
    if (id) {
      this.bookingCartService.addService(this.service);
      this.router.navigate(['services']);
    }
  }

}
