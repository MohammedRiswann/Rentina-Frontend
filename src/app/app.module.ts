import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './user/otp/otp.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, OtpComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, ReactiveFormsModule],
})
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OtpComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
