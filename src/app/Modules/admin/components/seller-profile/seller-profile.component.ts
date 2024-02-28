import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SellerProfileService } from '../../services/seller-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css'],
})
export class SellerProfileComponent implements OnInit {
  sellerData: string = '';
  sellerProfile: any;

  constructor(
    private service: SellerProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.sellerData = response['id'];
      console.log(this.sellerData);
    });
    if (this.sellerData) {
      this.getProfile(this.sellerData);
    }
  }

  getProfile(userId: string) {
    this.service.getProfile(userId).subscribe((response) => {
      console.log(response);

      this.sellerProfile = response;
    });
  }
}
