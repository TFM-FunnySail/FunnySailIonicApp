import {Component, Input, OnInit} from '@angular/core';
import {ServiceOutputDTO} from "../../../../shared/sdk";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {

  @Input()
  service?:ServiceOutputDTO | null;

  constructor() { }

  ngOnInit() {}

}
