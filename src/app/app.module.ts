import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {sdkApiConfigurationProvider} from './shared/sdkApiConfigurationFactory';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
    declarations: [AppComponent],
    imports: [
      AppRoutingModule,
      HttpClientModule,
      BrowserModule,
      IonicModule.forRoot(),
      BrowserAnimationsModule,
      CoreModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/'),
          deps: [HttpClient]
        }
      }),
    ],
    providers: [
      sdkApiConfigurationProvider,
      {
        provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy
      }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
