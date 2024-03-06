import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { SellerService } from '../../services/seller-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponentSeller {
  constructor(private router: Router, private sellerService: SellerService) {}

  navigateTo(route: string) {
    const sellerId = this.sellerService.getSellerId();
    this.router.navigate([route], { queryParams: { sellerId: sellerId } });
  }
  onLog() {
    localStorage.clear();
    this.router.navigate(['/seller/login']);
  }
}
