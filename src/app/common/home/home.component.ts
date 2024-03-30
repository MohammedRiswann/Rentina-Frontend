import { Component } from '@angular/core';
import { PropertyService } from '../../Modules/user/services/propertyService.service';
import { Router } from '@angular/router';
import { MapOptions } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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

  options: MapOptions = {
    layers: [
      // Define your layers here
    ],
    zoom: 1,
    center: [0, 0], // Example center coordinates
  };

  onLog() {
    localStorage.clear();
    this.router.navigate(['/user/login']);
  }

  onSearch() {
    const queryParams = {
      searchQuery: this.searchQuery,
      locationQuery: this.locationQuery,
      typeQuery: this.typeQuery,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    };
    this.router.navigate(['/user/property-list'], { queryParams });
  }
}
