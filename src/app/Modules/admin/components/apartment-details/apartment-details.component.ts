import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../../services/apartments.service';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit {
  details: any;
  apartmentId: string = '';

  constructor(
    private apartmentService: ApartmentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((resposne) => {
      this.apartmentId = resposne['id'];
    });
    console.log(this.apartmentId);

    if (this.apartmentId) {
      this.viewDetails(this.apartmentId);
    }
  }

  viewDetails(apartmentId: string) {
    this.apartmentService
      .viewApartmentDetails(apartmentId)
      .subscribe((response) => {
        this.details = response;
      });
  }
}
