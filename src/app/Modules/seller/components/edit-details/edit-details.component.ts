import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyDetailsService } from '../../services/property-details.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: PropertyDetailsService
  ) {}
  apartmentId: any;
  details: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.apartmentId = params['id'];
      console.log(this.apartmentId);
      this.loadApartmentDetails();
    });
  }
  loadApartmentDetails() {
    this.service.getPropertyDetails(this.apartmentId).subscribe((response) => {
      this.details = response;
    });
  }
  editProfile() {}
}
