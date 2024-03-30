import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentSeller } from './components/home/home.component';
import { LogincomponentSeller } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { SellerRoutingModule } from './seller-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddLandsComponent } from './components/add-lands/add-lands.component';

import { AllDetailsComponent } from './components/all-details/all-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { InterceptorService } from './common-Interceptor/interceptor.service';
import { ListOfAllComponent } from './list-of-all/list-of-all.component';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { LandsDetailsComponent } from './components/lands-details/lands-details.component';
import { PaymentApprovalComponent } from './components/payment-approval/payment-approval.component';

@NgModule({
  declarations: [
    HomeComponentSeller,
    LogincomponentSeller,
    SignupComponent,
    AddProductsComponent,
    AddLandsComponent,

    AllDetailsComponent,
    EditDetailsComponent,
    SellerProfileComponent,
    ListOfAllComponent,
    ApartmentListComponent,
    LandsDetailsComponent,
    PaymentApprovalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SellerRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class SellersModule {}
