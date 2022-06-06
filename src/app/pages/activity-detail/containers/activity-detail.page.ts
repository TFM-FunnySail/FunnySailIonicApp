import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityOutputDTO, ActivitiesService} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {BookingCartService} from "../../../shared/services/booking-cart/booking-cart.service";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  exist = false;
  activity: ActivityOutputDTO;

  constructor(private activatedRoute: ActivatedRoute,
              private activitiesService: ActivitiesService,
              private storageService: StorageService,
              private router: Router,
              protected bookingCartService:BookingCartService) {
    this.activity = {
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
      this.activitiesService.apiActivitiesIdGet(id).subscribe(resp => {
        if(resp){
          this.exist = true;
          this.activity = resp;
        }
      });
    });
  }

  booking(){
    const id = this.activity.id;
    if (id) {
      this.bookingCartService.addActivity(this.activity);
      this.router.navigate(['activities']);
    }
  }

}
