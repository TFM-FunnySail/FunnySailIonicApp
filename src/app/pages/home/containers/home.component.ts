import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  form: any;
  linksMenus: any[] = [
    {
      name: 'Activities',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'activities'
    },
    {
      name: 'Services',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'services'
    },
    {
      name: 'BoatRental',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'boats'
    }

  ];

  comments: any[] = [
    {
      user: 'Random user',
      date: '05/02/21',
      stars: 5,
      comment: 'Random comment'
    },
    {
      user: 'Random user',
      date: '05/02/21',
      stars: 5,
      comment: 'Random comment'
    },
    {
      user: 'Random user',
      date: '05/02/21',
      stars: 5,
      comment: 'Random comment'
    },
    {
      user: 'Random user',
      date: '05/02/21',
      stars: 5,
      comment: 'Random comment'
    }
  ];
  constructor(private router: Router, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  search($event: any) {

    const initialDate = $event.initialDate;
    const endDate = $event.endDate;

    this.router.navigate(['/boats'], { queryParams: { initialDate, endDate } });
  }

  rent() {
    this.router.navigate(['/rent-boat']);
  }
  boats() {
    this.router.navigate(['/boats']);
  }
}
