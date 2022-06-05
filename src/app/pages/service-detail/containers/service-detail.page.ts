import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceOutputDTO, ServicesService} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

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
              private router: Router) {
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
      const bookingCart = this.storageService.getItem('bookingCart');
      let bookingCartJSON:any;
      if (bookingCart) {
        bookingCartJSON = JSON.parse(bookingCart);
        if (bookingCartJSON.services) {
          if(!this.existService(bookingCartJSON, id)){
            bookingCartJSON.services.push({id});
          }
        } else {
          bookingCartJSON.services = [{id}];
          console.log(bookingCartJSON);
        }
      } else {
        bookingCartJSON = {services: [{id}]};
      }
      this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
      this.router.navigate(['/booking']);
    }
  }

  private existService(bookingCartJSON: any, id: number) {
    for (let ser of bookingCartJSON.services) {
      if (parseInt(ser.id) === id) {
        return true;
      }
    }
    return false;
  }

}
