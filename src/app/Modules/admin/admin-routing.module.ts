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
import { AuthguardAdmin } from 'src/app/guards/admin-home.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponentAdmin,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'seller-list',
    component: SellerListComponent,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'seller-profile',
    component: SellerProfileComponent,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'apartments-list',
    component: ApartmentsComponent,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'lands-list',
    component: LandsComponent,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'apartment-details',
    component: ApartmentDetailsComponent,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'lands-details',
    component: LandDetailsComponent,
    canActivate: [AuthguardAdmin],
  },
  {
    path: 'pending',
    component: PendingApprovalComponent,
    canActivate: [AuthguardAdmin],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class adminRoutingmodule {}
