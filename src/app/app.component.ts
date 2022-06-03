import { Component } from '@angular/core';
import {StorageService} from "./shared/services/storage/storage.service";
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private translateService: TranslateService,
              private storageService: StorageService) {
    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang() as string;
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    this.storageService.setItem('lang', this.translateService.currentLang);
  }
}
