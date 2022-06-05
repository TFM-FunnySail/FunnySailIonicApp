import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {format, parseISO} from "date-fns";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../../../shared/sdk";

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

  initialDate:any;
  endDate:any;
  minDate: any;

  form:FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected userService: UsersService) {
    this.form = this.formBuilder.group({
      initialDate: ['', []],
      endDate: ['', []],
    });

    this.minDate = new Date(Date.now()).toISOString();
    console.log(this.minDate);
  }

  ngOnInit() {}

  onSearch($event: any) {
    this.search.emit({
      initialDate:this.reFormatDate(this.initialDate),
      endDate:this.reFormatDate(this.endDate),
    });
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  reFormatDate(value: string) {
    if(!value && value === '')
      return '';

    const date = new Date(value);
    return date.toISOString();
  }
}
