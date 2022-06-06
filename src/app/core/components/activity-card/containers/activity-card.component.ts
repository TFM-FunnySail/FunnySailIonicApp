import {Component, Input, OnInit} from '@angular/core';
import {ActivityOutputDTO} from "../../../../shared/sdk";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {

  @Input()
  activity?:ActivityOutputDTO | null;

  constructor() { }

  ngOnInit() {}

}
