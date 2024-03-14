import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './common/otp/otp.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { LandComponent } from './common/land/land.component';
import { InterceptorService } from './common/services/interceptor.service';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { SellersModule } from './Modules/seller/sellers.module';
import { UserRoutingModule } from './Modules/user/user-routing.module';
import { AdminModule } from './Modules/admin/admin.module';
import { ApartmentDetailsComponent } from './Modules/user/component/apartment-details/apartment-details.component';
import { LandsListComponent } from './Modules/user/lands-list/lands-list.component';
import { LandDetailsComponent } from './Modules/user/land-details/land-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LandComponent,
    NotFoundComponent,
    ApartmentDetailsComponent,
    LandsListComponent,
    LandDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SellersModule,
    UserRoutingModule,
    AdminModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
