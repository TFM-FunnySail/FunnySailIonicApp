import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceDetailPage } from './containers/service-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceDetailPageRoutingModule {}
