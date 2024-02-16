import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentAdmin } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponentAdmin,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class adminRoutingmodule {}
