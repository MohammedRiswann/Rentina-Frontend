import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './user/otp/otp.component';
import { RegisterComponent } from './user/signup/signup.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'otp-verification',
    component: OtpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user-login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
