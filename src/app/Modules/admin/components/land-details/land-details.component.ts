import { Component } from '@angular/core';
import { ApartmentsService } from '../../services/apartments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css'],
})
export class LandDetailsComponent {
  details: any;
  landId: string = '';

  constructor(
    private apartmentService: ApartmentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.landId = response['id'];
    });
    console.log(this.landId);

    if (this.landId) {
      this.viewDetails(this.landId);
    }
  }

  viewDetails(landId: string) {
    this.apartmentService.viewLandsDetails(landId).subscribe((response) => {
      this.details = response;
    });
  }
}
