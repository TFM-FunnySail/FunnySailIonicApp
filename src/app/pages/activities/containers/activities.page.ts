import { Component, OnInit } from '@angular/core';
import { ActivityOutputDTO, ActivityOutputDTOGenericResponseDTO, ActivitiesService } from "../../../shared/sdk";
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  activities?: Array<ActivityOutputDTO> | null;

  form: any;

  constructor(private formBuilder: FormBuilder,
    protected activityApiService: ActivitiesService,
              protected http: HttpClient,
              protected router: Router) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      minPrice: [''],
      maxPrice: ['']
    });

    this.activityApiService.apiActivitiesGet(undefined, true).subscribe(resp => {
      this.activities = this.handlerServices(resp).items;
    });
  }

  handlerServices(resp: ActivityOutputDTOGenericResponseDTO) {
    return resp;
  }

  searchAct() {
    if(this.form.valid) {
      let name = undefined;
      if (this.form.get('name').value) {
        name = this.form.get('name').value;
      }
      let minPrice = undefined;
      if (this.form.get('minPrice').value) {
        minPrice = this.form.get('minPrice').value;
      }
      let maxPrice = undefined;
      if (this.form.get('maxPrice').value) {
        maxPrice = this.form.get('maxPrice').value;
      }
      this.activityApiService.apiActivitiesGet(undefined, true, minPrice, maxPrice, name).subscribe(resp => {
        this.activities = this.handlerServices(resp).items;
      });
    }
  }

}
