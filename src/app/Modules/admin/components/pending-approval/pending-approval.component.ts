import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SellerListService } from '../../services/seller-list.service';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.css'],
})
export class PendingApprovalComponent implements OnInit {
  constructor(
    private service: SellerListService,
    private appService: BlockService
  ) {}
  sellers: any;

  ngOnInit(): void {
    this.getSellers();
  }

  getSellers() {
    this.service.getPendingSellers().subscribe((response) => {
      console.log(response);
      this.sellers = response;
    });
  }

  confirmApproval(sellerID: string) {
    this.appService.approveUser(sellerID).subscribe((response) => {
      console.log(response);
    });
    this.appService.sendApprovalEmail(sellerID).subscribe((emailResponse) => {
      console.log(emailResponse);
    });
    this.getSellers();
  }
}
