import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../../services/seller-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponentSeller implements OnInit {
  id: string = '';
  constructor(
    private router: Router,
    private sellerService: SellerService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((resposne) => {
      this.id = resposne['id'];
    });
    console.log(this.id);
  }

  navigateTo(route: string) {
    const sellerId = this.sellerService.getSellerId();
    this.router.navigate([route], { queryParams: { sellerId: sellerId } });
  }
  onLog() {
    localStorage.clear();
    this.router.navigate(['/seller/login']);
  }
}
