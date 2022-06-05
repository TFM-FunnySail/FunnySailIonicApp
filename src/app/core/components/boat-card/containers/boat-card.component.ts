import {Component, Input, OnInit} from '@angular/core';
import {BoatOutputDTO} from "../../../../shared/sdk";

@Component({
  selector: 'app-boat-card',
  templateUrl: './boat-card.component.html',
  styleUrls: ['./boat-card.component.scss'],
})
export class BoatCardComponent implements OnInit {

  @Input()
  boat:BoatOutputDTO;

  constructor() { }

  ngOnInit() {}

}
