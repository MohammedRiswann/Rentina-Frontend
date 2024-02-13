import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/signup/signup.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './user/otp/otp.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { LandComponent } from './land/land.component';
import { SignupComponent } from './seller/signup/signup.component';
import { InterceptorService } from './user/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OtpComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    LandComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
