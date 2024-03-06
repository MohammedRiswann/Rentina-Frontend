import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  private sellerId: string = '';

  constructor() {}

  setSellerId(sellerId: string) {
    this.sellerId = sellerId;
  }

  getSellerId() {
    return this.sellerId;
  }
}
