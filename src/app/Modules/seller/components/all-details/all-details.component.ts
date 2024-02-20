import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDetailsService } from '../../services/property-details.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css'],
})
export class AllDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private propertyDetails: PropertyDetailsService,
    private router: Router
  ) {}
  apartmentId: any;
  details: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.apartmentId = params['id'];
      this.loadApartmentDetails();
    });
  }
  loadApartmentDetails() {
    this.propertyDetails
      .getPropertyDetails(this.apartmentId)
      .subscribe((response) => {
        this.details = response;
      });
  }
  editProfile() {
    this.router.navigate([`/seller/edit-details`, this.apartmentId]);
  }
}
