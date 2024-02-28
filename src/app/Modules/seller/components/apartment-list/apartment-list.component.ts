import { Component } from '@angular/core';
import { ApartmentService } from '../../services/apartments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css'],
})
export class ApartmentListComponent {
  apartments: any[] = [];
  details: any;

  constructor(
    private apartmentService: ApartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments(): void {
    this.apartmentService.getApartments().subscribe((response) => {
      console.log(response);
      this.apartments = response;
    });
  }
  deleteApartments(id: string) {
    this.apartmentService.deleteApartment(id).subscribe((response) => {
      console.log(id);
      alert('Property Deleted Succesfully..');
      console.log('deleted succesfully');
      this.getApartments();
    });
  }

  viewDetails(apartmentId: string): void {
    console.log('hell');

    this.router.navigate([`/seller/Property-details/${apartmentId}`]);
  }
}
