import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { PropertyListComponent } from './component/property-list/property-list.component';
import { UserComponent } from './user.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { UploadIdComponent } from './component/upload-id/upload-id.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PropertyListComponent,
    UserComponent,
    WishlistComponent,
    LiveChatComponent,
    UploadIdComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
