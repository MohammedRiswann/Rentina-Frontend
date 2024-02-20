import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './common/otp/otp.component';

import { HomeComponent } from './common/home/home.component';

import { Authguard } from './guards/home.guard';

import { otpGuard } from './guards/otp.guard';

import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'otp-verification',
    canActivate: [otpGuard],
    component: OtpComponent,
  },
  {
    path: '',
    canActivate: [Authguard],
    component: HomeComponent,
  },

  {
    path: 'seller',
    loadChildren: () =>
      import('./Modules/seller/sellers.module').then((e) => e.SellersModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Modules/user/component/user.module').then((e) => e.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/admin/admin.module').then((e) => e.AdminModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // {
  //   path: 'otp-seller-verification',
  //   component: userType,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
