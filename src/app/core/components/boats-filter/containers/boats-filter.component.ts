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

  static idInput1:number = 0;
  static idInput2:number = 10000;
  form:FormGroup;
  idInput1: number;
  idInput2: number;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected userService: UsersService) {
    this.form = this.formBuilder.group({
      initialDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });

    this.minDate = new Date(Date.now()).toISOString();
    console.log('constructor del filtro',this.initialDate,this.endDate);

    BoatsFilterComponent.idInput1 +=1;
    BoatsFilterComponent.idInput2 +=1;

    this.idInput1 = BoatsFilterComponent.idInput1;
    this.idInput2 = BoatsFilterComponent.idInput2;
  }

  ngOnInit() {
    console.log('inicializo el component de filtro');
  }

  onSearch($event: any) {
    if(!this.form.invalid){
      this.search.emit({
        initialDate:this.reFormatDate(this.initialDate),
        endDate:this.reFormatDate(this.endDate),
      });
    }
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
