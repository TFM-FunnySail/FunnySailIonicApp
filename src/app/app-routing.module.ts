import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {SignUpPageModule} from "./pages/sign-up/sign-up.module";
import { HomePageModule } from "./pages/home/home.module";
import { ServiceDetailPageModule } from "./pages/service-detail/service-detail.module";
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'sign-up',
    loadChildren: () => SignUpPageModule
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesPageModule)
  },
  {
    path: 'service/:id',
    loadChildren: () => ServiceDetailPageModule
  },
  {
    path: 'boats',
    loadChildren: () => import('./pages/boats/boats.module').then(m => m.BoatsPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./pages/activities/activities.module').then(m => m.ActivitiesPageModule)
  },
  {
    path: 'activity/:id',
    loadChildren: () => import('./pages/activity-detail/activity-detail.module').then(m => m.ActivityDetailPageModule)
  },
  {
    path: 'boat',
    loadChildren: () => import('./pages/boat-detail/boat-detail.module').then(m => m.BoatDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule {}
