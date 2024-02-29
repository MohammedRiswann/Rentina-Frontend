import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { PropertyListComponent } from './component/property-list/property-list.component';
import { loginGuard } from 'src/app/guards/login.guard';
import { Authguard } from 'src/app/guards/home.guard';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
