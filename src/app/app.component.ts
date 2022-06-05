import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Embarcaciones', url: '/boats', icon: 'boat' },
    { title: 'Servicios', url: '/services', icon: 'easel' },
    { title: 'Login', url: '/login', icon: 'key' },
  ];
  constructor() {
  }
}
