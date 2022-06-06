import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './containers/profile.page';
import {CoreModule} from "../../core/core.module";
import {BoatsFilterModule} from "../../core/components/boats-filter/boats-filter.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        ProfilePageRoutingModule,
        CoreModule,
    ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
