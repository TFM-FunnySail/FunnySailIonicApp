import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityOutputDTO, ServiceOutputDTO} from "../../../../shared/sdk";

@Component({
  selector: 'app-activity-cart-item',
  templateUrl: './activity-cart-item.component.html',
  styleUrls: ['./activity-cart-item.component.scss'],
})
export class ActivityCartItemComponent implements OnInit {

  @Input()
  activity:ActivityOutputDTO;

  @Output()
  removeActivity: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  removeActivityFromCart(){
    this.removeActivity.emit(this.activity);
  }

}
