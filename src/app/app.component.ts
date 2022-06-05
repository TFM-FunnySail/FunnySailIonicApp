import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/sign-up', icon: 'home' },
    { title: 'Embarcaciones', url: '/boats', icon: 'boat' },
    { title: 'Servicios', url: '/services', icon: 'easel' },
    { title: 'Login', url: '/login', icon: 'key' },
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Actividades', url: '/activities', icon: 'fish' },
    { title: 'Perfil', url: '/profile', icon: 'person'},
  ];
  constructor() {
  }
}
