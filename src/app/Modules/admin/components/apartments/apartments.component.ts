import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApartmentsService } from '../../services/apartments.service';
import { response } from 'express';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  apartments: any[] = [];
  details: any;
  userId: string = '';

  constructor(
    private apartmentService: ApartmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.userId = response['id'];
    });
    if (this.userId) {
      this.getApartments(this.userId);
    }
  }

  getApartments(userId: string) {
    this.apartmentService.getApartments(userId).subscribe((response) => {
      console.log(response);
      this.apartments = response;
    });
  }

  deleteApartments(id: string) {
    // this.apartmentService.deleteApartment(id).subscribe((response) => {
    //   console.log(id);
    //   alert('Property Deleted Succesfully..');
    //   console.log('deleted succesfully');
    //   this.getApartments(this.userId);
    // });
  }
}
