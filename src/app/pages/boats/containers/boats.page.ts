import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService, BoatTypeOutputDTO} from "../../../shared/sdk";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
})
export class BoatsPage implements OnInit {

  boats?: Array<BoatOutputDTO> | null;
  boatTypes: BoatTypeOutputDTO[] = [];

  form: any;
  initDate: string = '';
  finalDate: string = '';

  constructor(private formBuilder: FormBuilder,
              protected boatsApiService: BoatsService,
              protected http: HttpClient,
              protected router: Router,
              private activatedRoute: ActivatedRoute) {
    this.setBoatTypes();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.activatedRoute.queryParams.subscribe(parameters => {
      let initialDate = undefined;
      if(parameters['initialDate'] && parameters['initialDate'] !== '')
      {
        initialDate = decodeURIComponent(parameters['initialDate']);
        console.log(initialDate);
        this.form.get('initialDate').setValue(initialDate);
      }
      let endDate = undefined;
      if(parameters['endDate'] && parameters['endDate'] !== '')
      {
        endDate = decodeURIComponent(parameters['endDate']);
        this.form.get('endDate').setValue(endDate);
      }
      if(initialDate && endDate) {
        this.boatsApiService.apiBoatsAvailableBoatsGet(initialDate, endDate).subscribe(resp => {
          this.boats = this.handlerBoats(resp).items;
        });
      }
    });
  }

  handlerBoats(resp: BoatOutputDTOGenericResponseDTO) {
    return resp;
  }

  searchAct() {
    console.log('searchboat')
    if(this.form.valid) {
      console.log('isValid')
      console.log(this.form)
      let initialDate = undefined;
      if (this.form.get('initialDate').value) {
        console.log(this.form.get('initialDate').value)
        const date = this.form.get('initialDate').value as unknown as Date;
        initialDate = date.toISOString();
        this.initDate = date.toISOString();
      }
      let endDate = undefined;
      if (this.form.get('endDate').value) {
        const date = this.form.get('endDate').value as unknown as Date;
        endDate = date.toISOString();
        this.finalDate = endDate;
      }
      this.boatsApiService.apiBoatsAvailableBoatsGet(initialDate, endDate).subscribe(resp => {
        console.log(resp)
        this.boats = this.handlerBoats(resp).items;
      });
    }
  }

  private setBoatTypes() {
    this.boatsApiService.apiBoatsTypesGet()
      .subscribe((resp: BoatTypeOutputDTO[]) => {
        this.boatTypes = resp;
      });
  }

  search($event: any) {
    console.log($event);
  }
}
