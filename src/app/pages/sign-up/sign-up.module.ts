import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './containers/sign-up.page';
import {CoreModule} from "../../core/core.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        CoreModule,
        SignUpPageRoutingModule,
        TranslateModule
    ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
