import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDetailsService } from '../../services/property-details.service';

@Component({
  selector: 'app-lands-details',
  templateUrl: './lands-details.component.html',
  styleUrls: ['./lands-details.component.css'],
})
export class LandsDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private propertyDetails: PropertyDetailsService,
    private router: Router
  ) {}
  landId: any;
  details: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.landId = params['id'];
      this.loadLandDetails();
    });
  }
  loadLandDetails() {
    console.log('------works--------');

    this.propertyDetails.getLandsDetails(this.landId).subscribe((response) => {
      this.details = response;
    });
  }
  editProfile() {}
}
