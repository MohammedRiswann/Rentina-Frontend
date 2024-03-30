import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../../services/productservice.service';

@Component({
  selector: 'app-payment-approval',
  templateUrl: './payment-approval.component.html',
  styleUrls: ['./payment-approval.component.css'],
})
export class PaymentApprovalComponent {
  id!: string;
  idDetails!: IdDetails;
  users: any;
  productDetails: any[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private service: ProductserviceService
  ) {
    this.productDetails = [];
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);

      this.id = params['id'];
      console.log(params['id']);
    });
    this.getPaymentList(this.id);
  }

  getPaymentList(id: string) {
    this.service.fetchId(id).subscribe((response) => {
      console.log(response.productDetails);

      this.productDetails = response.productDetails;
    });
  }

  rejectId() {}
  confirmApproval(id: string) {
    this.service.approvePayment(id).subscribe((response) => {
      console.log(response);
    });
    // this.appService.sendApprovalEmail(sellerID).subscribe((emailResponse) => {
    //   console.log(emailResponse);
    // });
    this.getPaymentList(this.id);
  }
}

interface IdDetails {
  userName: string;
  imageUrl: string;
  approved: boolean;
  rejected: boolean;
}
