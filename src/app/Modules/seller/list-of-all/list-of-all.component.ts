import { Component } from '@angular/core';
import { ApartmentService } from '../services/apartments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-all',
  templateUrl: './list-of-all.component.html',
  styleUrls: ['./list-of-all.component.css'],
})
export class ListOfAllComponent {
  lands: any[] = [];
  details: any;

  constructor(
    private apartmentService: ApartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLands();
  }

  getLands(): void {
    this.apartmentService.getLand().subscribe((response) => {
      console.log(response);
      this.lands = response;
    });
  }
  deleteLands(id: string) {
    this.apartmentService.deleteApartment(id).subscribe((response) => {
      console.log(id);
      alert('Property Deleted Succesfully..');
      console.log('deleted succesfully');
      this.getLands();
    });
  }

  viewDetails(landId: string): void {
    console.log('hell');

    this.router.navigate([`/seller/Property-details/${landId}`]);
  }
}
