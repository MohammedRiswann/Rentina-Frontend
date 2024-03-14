import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { PropertyListComponent } from './component/property-list/property-list.component';
import { loginGuard } from 'src/app/guards/login.guard';
import { Authguard } from 'src/app/guards/home.guard';
import { ApartmentDetailsComponent } from './component/apartment-details/apartment-details.component';
import { LandsListComponent } from './lands-list/lands-list.component';
import { LandDetailsComponent } from './land-details/land-details.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'property-list',
    canActivate: [Authguard],
    component: PropertyListComponent,
  },
  {
    path: 'apartment-details',
    canActivate: [Authguard],
    component: ApartmentDetailsComponent,
  },
  {
    path: 'lands-list',
    canActivate: [Authguard],
    component: LandsListComponent,
  },
  {
    path: 'lands-details',
    canActivate: [Authguard],
    component: LandDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
