import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'menu.home', url: 'home', icon: 'home' },
    { title: 'menu.boats', url: '/boats', icon: 'boat' },
    { title: 'menu.services', url: '/services', icon: 'easel' },
    { title: 'menu.login', url: '/login', icon: 'key' },
    { title: 'menu.activities', url: '/activities', icon: 'fish' },
    { title: 'menu.profile', url: '/profile', icon: 'person'},
    { title: 'menu.booking', url: '/refunds-booking', icon: 'calendar'}
  ];
  constructor(private translateService: TranslateService) {
    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.addLangs(['es']);
    this.translateService.setDefaultLang('es');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/es/) ? browserLang : 'es');
  }
}
