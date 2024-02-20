import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form related modules
import { profileService } from '../../services/profile.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css'],
})
export class SellerProfileComponent implements OnInit {
  sellerProfileForm!: FormGroup;
  sellerData: any;
  sellerProfile: any;

  constructor(private fb: FormBuilder, private service: profileService) {}

  ngOnInit(): void {
    // Initialize the form with form controls
    this.sellerProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      country: ['', Validators.required],
      state: ['', Validators.required],
    });
    this.getProfile();
  }

  updateProfile() {
    if (this.sellerProfileForm.invalid) {
      return;
    } else {
      this.service
        .addProfile(this.sellerProfileForm.value)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
  getProfile() {
    this.service.getProfile().subscribe((response) => {
      // console.log(response[0].profile[0]);
      this.sellerData = response[0];
      // console.log(this.sellerData);
      this.sellerProfile = response[0].profile[0];
      this.sellerProfileForm.controls['firstName'].setValue(
        this.sellerData.firstName || ''
      );
      this.sellerProfileForm.controls['lastName'].setValue(
        this.sellerData.lastName || ''
      );
      this.sellerProfileForm.controls['email'].setValue(
        this.sellerData.email || ''
      );
      this.sellerProfileForm.controls['phone'].setValue(
        this.sellerData.phone || ''
      );
      this.sellerProfileForm.controls['country'].setValue(
        this.sellerProfile.country || ''
      );
      this.sellerProfileForm.controls['state'].setValue(
        this.sellerProfile.state || ''
      );
    });
  }
}
