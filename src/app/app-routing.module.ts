import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {SignUpPageModule} from "./pages/sign-up/sign-up.module";
import {HomeModule} from "./pages/home/home.module";
import {ServiceDetailPageModule} from "./pages/service-detail/service-detail.module";
import {BookingCartPageModule} from "./pages/booking-cart/booking-cart.module";

const routes: Routes = [
  {
    path: 'booking-cart',
    loadChildren: () => BookingCartPageModule
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
    path: 'boat',
    loadChildren: () => import('./pages/boat-detail/boat-detail.module').then(m => m.BoatDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule {
}
