import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public active:string = '';
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'key' },

  ];
  constructor(protected router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }
}
