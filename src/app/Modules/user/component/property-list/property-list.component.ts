import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/propertyService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  apartments: any[] = [];
  filteredProperties: any[] = [];
  searchQuery: string = '';
  locationQuery: string = '';
  typeQuery: string = '';
  minPrice: number | undefined;
  maxPrice: number | undefined;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['searchQuery'] || '';
      this.locationQuery = params['locationQuery'] || '';
      this.typeQuery = params['typeQuery'] || '';
      this.minPrice = params['minPrice']
        ? parseInt(params['minPrice'])
        : undefined;
      this.maxPrice = params['maxPrice']
        ? parseInt(params['maxPrice'])
        : undefined;
      this.fetchApartments();
    });
  }

  fetchApartments() {
    this.propertyService
      .searchApartments(
        this.searchQuery,
        this.locationQuery,
        this.typeQuery,
        this.minPrice,
        this.maxPrice
      )
      .subscribe((properties) => {
        this.filteredProperties = properties;
      });
  }

  deleteApartment(apartmentId: string) {
    // Implement delete functionality
  }

  viewApartmentDetails(apartmentId: string) {
    // Implement view details functionality
  }

  filter() {
    if (!this.searchQuery.trim()) {
      this.filteredProperties = this.apartments;
      return;
    }

    this.filteredProperties = this.apartments.filter(
      (apartment) =>
        apartment.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        apartment.location
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
    );
  }
}
