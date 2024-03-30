import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponentSeller } from './components/home/home.component';
import { AuthguardSeller } from 'src/app/guards/seller-home.guard';
import { LogincomponentSeller } from './components/login/login.component';
import { NotFoundComponent } from 'src/app/common/not-found/not-found.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddLandsComponent } from './components/add-lands/add-lands.component';

import { AllDetailsComponent } from './components/all-details/all-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { ListOfAllComponent } from './list-of-all/list-of-all.component';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { Authguard } from 'src/app/guards/home.guard';
import { loginGuard } from 'src/app/guards/login.guard';
import { LandsDetailsComponent } from './components/lands-details/lands-details.component';
import { PaymentApprovalComponent } from './components/payment-approval/payment-approval.component';

const routes: Routes = [
  {
    path: 'register',
    canActivate: [loginGuard],
    component: SignupComponent,
  },
  {
    path: 'home',

    component: HomeComponentSeller,
    canActivate: [AuthguardSeller],
    children: [
      {
        path: 'profile',
        component: SellerProfileComponent,
      },

      {
        path: 'lands',
        component: ListOfAllComponent,
      },
      {
        path: 'properties',
        component: ApartmentListComponent,
      },
      {
        path: 'add-products',
        component: AddProductsComponent,
        canActivate: [AuthguardSeller],
      },
      {
        path: 'add-lands',
        canActivate: [AuthguardSeller],
        component: AddLandsComponent,
      },
      {
        path: 'payment-approval',
        canActivate: [AuthguardSeller],
        component: PaymentApprovalComponent,
      },
    ],
  },
  {
    path: 'Property-details/:id',
    canActivate: [AuthguardSeller],
    component: AllDetailsComponent,
  },
  {
    path: 'lands-details/:id',
    canActivate: [AuthguardSeller],
    component: LandsDetailsComponent,
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    component: LogincomponentSeller,
  },

  {
    path: 'edit-details/:id',
    canActivate: [AuthguardSeller],
    component: EditDetailsComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
