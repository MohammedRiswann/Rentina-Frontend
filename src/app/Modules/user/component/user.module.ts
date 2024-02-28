import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from '../user-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, PropertyListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
