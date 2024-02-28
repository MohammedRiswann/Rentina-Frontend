import { Component } from '@angular/core';
import { ApartmentsService } from '../../services/apartments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.css'],
})
export class LandsComponent {
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
      this.getLands(this.userId);
    }
  }

  getLands(userId: string) {
    this.apartmentService.getLands(userId).subscribe((response) => {
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

  viewDetails(apartmentId: string) {
    console.log('hell');

    this.router.navigate([`/seller/Property-details/${apartmentId}`]);
  }
}
