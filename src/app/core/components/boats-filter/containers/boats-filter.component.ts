import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {format, parseISO} from "date-fns";

@Component({
  selector: 'app-boats-filter',
  templateUrl: './boats-filter.component.html',
  styleUrls: ['./boats-filter.component.scss'],
})
export class BoatsFilterComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  subTitle: string = '';

  @Output()
  search: EventEmitter<any> = new EventEmitter();

  initialDate:string = '';
  endDate:string = '';

  constructor() { }

  ngOnInit() {}

  onSearch($event: any) {
    this.search.emit($event);
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy HH:MM');
  }
}
