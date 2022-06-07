import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesPageRoutingModule } from './activities-routing.module';

import { ActivitiesPage } from './containers/activities.page';
import {CoreModule} from "../../core/core.module";
import {ActivityCardModule} from "../../core/components/activity-card/activity-card.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ActivitiesPageRoutingModule,
        CoreModule,
        TranslateModule
    ],
  declarations: [ActivitiesPage]
})
export class ActivitiesPageModule {}
