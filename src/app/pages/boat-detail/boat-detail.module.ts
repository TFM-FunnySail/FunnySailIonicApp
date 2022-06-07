import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BoatDetailPageRoutingModule } from './boat-detail-routing.module';
import { BoatDetailPage } from './containers/boat-detail.page';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BoatDetailPageRoutingModule,
        CoreModule,
        SharedModule,
        TranslateModule
    ],
  declarations: [BoatDetailPage]
})
export class BoatDetailPageModule {}
