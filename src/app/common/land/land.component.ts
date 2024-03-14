import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PropertyService } from 'src/app/Modules/user/services/propertyService.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css'],
})
export class LandComponent {
  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {}

  searchQuery: string = '';
  locationQuery: string = '';
  typeQuery: string = '';
  minPrice: number | undefined = undefined;
  maxPrice: number | undefined = undefined;

  properties: any[] = [];

  onSearch() {
    const queryParams = {
      searchQuery: this.searchQuery,
      locationQuery: this.locationQuery,
      typeQuery: this.typeQuery,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    };
    this.router.navigate(['/user/lands-list'], { queryParams });
  }
}
