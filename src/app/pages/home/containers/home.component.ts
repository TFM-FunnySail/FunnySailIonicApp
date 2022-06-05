import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

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
  constructor(private router: Router) { }

  ngOnInit() {}

  rent() {
    this.router.navigate(['/rent-boat']);
  }
  boats() {
    this.router.navigate(['/boats']);
  }
}
