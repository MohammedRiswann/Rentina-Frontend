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
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found');
      return;
    }
    this.apartmentService.getLand(userId).subscribe((response) => {
      console.log(response);
      this.lands = response;
    });
  }
  deleteLands(id: string) {
    this.apartmentService.deleteLand(id).subscribe((response) => {
      console.log(id);
      alert('Land Deleted Succesfully..');
      console.log('deleted succesfully');
      this.getLands();
    });
  }

  viewDetails(landId: string): void {
    console.log('hell');

    this.router.navigate([`/seller/lands-details/${landId}`]);
  }
}
