import { Component, OnInit } from '@angular/core';
import {ServiceOutputDTO, ServiceOutputDTOGenericResponseDTO, ServicesService} from "../../../shared/sdk";
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  services?: Array<ServiceOutputDTO> | null;

  form: any;

  constructor(private formBuilder: FormBuilder,
              protected serviceApiService: ServicesService,
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

    this.serviceApiService.apiServicesGet(undefined,true).subscribe(resp => {
      this.services = this.handlerServices(resp).items;
    });
  }

  handlerServices(resp: ServiceOutputDTOGenericResponseDTO) {
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
      this.serviceApiService.apiServicesGet(undefined, true, minPrice, maxPrice, name).subscribe(resp => {
        this.services = this.handlerServices(resp).items;
      });
    }
  }

}
