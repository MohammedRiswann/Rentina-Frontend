import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './user/otp/otp.component';
import { RegisterComponent } from './user/signup/signup.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { Authguard } from './guards/home.guard';
import { loginGuard } from './guards/login.guard';
import { otpGuard } from './guards/otp.guard';
import { LandComponent } from './land/land.component';
import { Logincomponent } from './seller/login/login.component';
import { SignupComponent } from './seller/signup/signup.component';

const routes: Routes = [
  {
    path: 'user-signup',
    canActivate: [loginGuard],
    component: RegisterComponent,
  },
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
    path: 'user-login',
    canActivate: [loginGuard],
    component: LoginComponent,
  },
  {
    path: 'user-land',
    component: LandComponent,
  },
  {
    path: 'seller-login',
    component: Logincomponent,
  },
  {
    path: 'seller-register',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
