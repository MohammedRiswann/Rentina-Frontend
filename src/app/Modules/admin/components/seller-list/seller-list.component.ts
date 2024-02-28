import { Component, OnInit } from '@angular/core';
import { SellerListService } from '../../services/seller-list.service';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css'],
})
export class SellerListComponent implements OnInit {
  sellers: any;

  constructor(
    private sellerService: SellerListService,
    private blockService: BlockService
  ) {}

  ngOnInit(): void {
    this.getSellers();
  }

  getSellers() {
    this.sellerService.getSellers().subscribe((response) => {
      this.sellers = response;
    });
  }

  toggleBlock(sellerId: string) {
    const confirmation = confirm(
      `Are you sure you want to ${
        this.sellers.find((seller: any) => seller._id === sellerId).blocked
          ? 'unblock'
          : 'block'
      } this seller?`
    );
  }
}
