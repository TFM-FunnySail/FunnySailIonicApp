import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import { ActivityCardComponent } from "./containers/activity-card.component";

@NgModule({
  declarations: [
    ActivityCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ActivityCardComponent
  ]
})
export class ActivityCardModule {
}
