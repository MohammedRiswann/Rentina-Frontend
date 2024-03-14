import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentAdmin } from './components/home/home.component';
import { adminRoutingmodule } from './admin-routing.module';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { LandsComponent } from './components/lands/lands.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { LandDetailsComponent } from './components/land-details/land-details.component';
import { PendingApprovalComponent } from './components/pending-approval/pending-approval.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    HomeComponentAdmin,
    SellerListComponent,
    SellerProfileComponent,
    ApartmentsComponent,
    LandsComponent,
    ApartmentDetailsComponent,
    LandDetailsComponent,
    PendingApprovalComponent,
    UsersListComponent,
    UserProfileComponent,
  ],
  imports: [CommonModule, adminRoutingmodule],
})
export class AdminModule {}
