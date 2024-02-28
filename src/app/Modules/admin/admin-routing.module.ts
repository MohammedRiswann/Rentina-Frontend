import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentAdmin } from './components/home/home.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';

import { ApartmentsComponent } from './components/apartments/apartments.component';
import { LandsComponent } from './components/lands/lands.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { LandDetailsComponent } from './components/land-details/land-details.component';
import { PendingApprovalComponent } from './components/pending-approval/pending-approval.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponentAdmin,
  },
  {
    path: 'seller-list',
    component: SellerListComponent,
  },
  {
    path: 'seller-profile',
    component: SellerProfileComponent,
  },
  {
    path: 'apartments-list',
    component: ApartmentsComponent,
  },
  {
    path: 'lands-list',
    component: LandsComponent,
  },
  {
    path: 'apartment-details',
    component: ApartmentDetailsComponent,
  },
  {
    path: 'lands-details',
    component: LandDetailsComponent,
  },
  {
    path: 'pending',
    component: PendingApprovalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class adminRoutingmodule {}
