import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentAdmin } from './home/home.component';
import { adminRoutingmodule } from './admin-routing.module';

@NgModule({
  declarations: [HomeComponentAdmin],
  imports: [CommonModule, adminRoutingmodule],
})
export class AdminModule {}
