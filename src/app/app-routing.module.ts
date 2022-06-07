import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {SignUpPageModule} from "./pages/sign-up/sign-up.module";
import { ServiceDetailPageModule } from "./pages/service-detail/service-detail.module";
import {BookingCartPageModule} from "./pages/booking-cart/booking-cart.module";
// @ts-ignore
import {HomePageModule} from "./pages/home/home.module";
import { AuthGuard } from './shared/guards/auth.guard';

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
  {
    path: 'refunds-booking',
    loadChildren: () => import('./pages/refunds-booking/refunds-booking.module').then(m => m.RefundsBookingPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'booking/:id',
    loadChildren: () => import('./pages/booking-detail/booking-detail.module').then(m => m.BookingDetailPageModule)
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
