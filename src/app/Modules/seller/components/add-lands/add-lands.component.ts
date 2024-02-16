import { Component } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';

@Component({
  selector: 'app-add-lands',
  templateUrl: './add-lands.component.html',
  styleUrls: ['./add-lands.component.css'],
})
export class AddLandsComponent {
  productName!: string;
  productPrice!: string;
  images: File[] = [];

  constructor(private productService: ProductserviceService) {}

  addProduct() {
    const formData = new FormData();

    formData.append('name', this.productName);
    formData.append('price', this.productPrice);

    // Append each image to FormData
    for (const data of this.images) {
      formData.append('files', data);
    }

    // Call the product service to add product
    this.productService.addLands(formData).subscribe(
      (response) => {
        console.log('Product added successfully', response);
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
  }
  onFileChange(event: any) {
    const files = event.target.files;
    const remainingSlots = 7 - this.images.length;

    if (files && files.length > 0 && remainingSlots > 0) {
      const filesToAdd = Math.min(remainingSlots, files.length);

      for (let i = 0; i < filesToAdd; i++) {
        this.images.push(files[i]);
      }

      if (filesToAdd < files.length) {
        console.log('Only ' + remainingSlots + ' images can be uploaded.');
      }
    }
  }
}
