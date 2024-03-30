import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../services/propertyService.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlistItems!: any[];
  id: string = '';

  constructor(private service: PropertyService) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist() {
    this.service.getWishlistItems().subscribe((items) => {
      this.wishlistItems = items;
      console.log(this.wishlistItems);
    });
  }

  removeFromWishlist(item: any) {
    this.service.removeFromWishlist(item._id).subscribe(() => {
      this.wishlistItems = this.wishlistItems.filter(
        (wishlistItem) => wishlistItem._id !== item._id
      );
    });
  }
}
