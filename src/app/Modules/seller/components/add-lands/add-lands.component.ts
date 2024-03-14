import { Component } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lands',
  templateUrl: './add-lands.component.html',
  styleUrls: ['./add-lands.component.css'],
})
export class AddLandsComponent {
  productName!: string;
  productPrice!: string;
  images: File[] = [];
  description!: string;
  features!: string;
  type!: string;
  location!: string;
  role!: string;

  msg: string = '';

  constructor(
    private productService: ProductserviceService,
    private router: Router
  ) {}

  addProduct() {
    console.log('hello');

    const formData = new FormData();

    formData.append('name', this.productName);
    formData.append('price', this.productPrice);
    formData.append('description', this.description);
    formData.append('features', this.features);
    formData.append('type', this.type);
    formData.append('location', this.location);
    formData.append('role', this.role);

    // Append each image to FormData
    for (const data of this.images) {
      formData.append('files', data);
    }

    // Call the product service to add product
    this.productService.addLands(formData).subscribe(
      (response) => {
        console.log('Product added successfully', response);
        this.msg = response;
        alert('Product Uploaded Succesfully..');
        this.router.navigate(['/seller/home']);
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
  }
  onFileChange(event: any) {
    const files = event.target.files;
    const remainingSlots = 5 - this.images.length;

    if (files && files.length > 0 && remainingSlots > 0) {
      const filesToAdd = Math.min(remainingSlots, files.length);

      for (let i = 0; i < filesToAdd; i++) {
        this.images.push(files[i]);
      }

      if (filesToAdd < files.length) {
        console.log('Only ' + remainingSlots + ' images can be uploaded.');
      }
    } else {
      console.log('You can upload up to 5 images.');
    }
  }
}
