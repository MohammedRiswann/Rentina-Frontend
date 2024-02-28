import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { PropertyListComponent } from './component/property-list/property-list.component';

const routes: Routes = [
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'property-list',
    component: PropertyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
