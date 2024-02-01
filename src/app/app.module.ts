import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './user/otp/otp.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, OtpComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
