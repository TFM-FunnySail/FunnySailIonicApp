import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityDetailPage } from './containers/activity-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityDetailPageRoutingModule {}
