import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/propertyService.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit {
  apartmentData: string = '';
  details: any;
  messages: string[] = [];
  newMessage: string = '';
  selectedImage!: string;

  constructor(
    private route: ActivatedRoute,
    private service: PropertyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.apartmentData = response['id'];
      console.log(this.apartmentData);
    });
    if (this.apartmentData) {
      this.getApartmentDetails(this.apartmentData);
    }
  }

  getApartmentDetails(userId: string) {
    this.service.getApartmentDetails(userId).subscribe((response) => {
      this.details = response;
      console.log(response);
    });
  }
  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
}
