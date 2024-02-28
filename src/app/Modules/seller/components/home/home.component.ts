import { Component } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponentSeller {
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate(['route']);
  }
}
