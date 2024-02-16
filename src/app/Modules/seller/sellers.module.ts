import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentSeller } from './components/home/home.component';
import { LogincomponentSeller } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerRoutingModule } from './seller-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddLandsComponent } from './components/add-lands/add-lands.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';

@NgModule({
  declarations: [
    HomeComponentSeller,
    LogincomponentSeller,
    SignupComponent,
    AddProductsComponent,
    AddLandsComponent,
    ApartmentsComponent,
    AllDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SellerRoutingModule,
  ],
})
export class SellersModule {}
