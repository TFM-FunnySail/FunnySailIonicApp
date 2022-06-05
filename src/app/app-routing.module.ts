import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {SignUpPageModule} from "./pages/sign-up/sign-up.module";
import {HomeModule} from "./pages/home/home.module";

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
    path: 'home',
    loadChildren: () => HomeModule
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
