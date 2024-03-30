import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/propertyService.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css'],
})
export class LandDetailsComponent {
  apartmentData: string = '';
  details: any;
  messages: string[] = [];
  newMessage: string = '';
  selectedImage!: string;
  review: any = {};
  reviews: Review[] = [];
  messageSubmit = '';
  displayedReviews: Review[] = [];
  startIndex = 0;
  count = 4;
  showMoreButton = true;
  reportForm!: FormGroup;
  isInWishlist: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: PropertyService,

    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.apartmentData = response['id'];
      console.log(this.apartmentData);
      this.getReviews(this.apartmentData);
      this.reportForm = this.fb.group({
        reason: ['', Validators.required],
      });
    });
    if (this.apartmentData) {
      this.getApartmentDetails(this.apartmentData);
    }
    // this.socket.receiveMessages().subscribe((message) => {
    //   this.messages.push(message);
    // });
  }
  logout() {}
  isLoggedIn() {}

  getApartmentDetails(userId: string) {
    this.service.getLandDetails(userId).subscribe((response) => {
      this.details = response;

      console.log(this.details);
    });
  }
  // sendMessage() {
  //   this.socket.sendMessage(this.newMessage);
  //   this.newMessage = '';
  // }

  submitReview(id: string) {
    this.service.submitReview(this.review, id).subscribe(
      (response) => {
        this.messageSubmit = response.message;
      },
      (error) => {
        console.error('Failed to submit review:', error);
      }
    );
    this.getReviews(id);
  }
  getReviews(id: string) {
    console.log('hello');

    this.service.getProductReviews(id).subscribe((reviews) => {
      console.log(reviews);

      this.reviews = reviews;
      console.log(this.review);

      this.loadReviews();
    });
  }

  loadReviews() {
    this.displayedReviews = this.reviews.slice(
      this.startIndex,
      this.startIndex + this.count
    );
    if (this.startIndex + this.count >= this.reviews.length) {
      this.showMoreButton = false;
    }
  }

  loadMoreReviews() {
    this.startIndex += this.count;
    this.loadReviews();
  }

  moveNextReview() {
    if (this.startIndex + 1 < this.reviews.length) {
      this.startIndex++;
    }
  }

  movePreviousReview() {
    if (this.startIndex - 1 >= 0) {
      this.startIndex--;
    }
  }

  isRightVisible(): boolean {
    return this.startIndex + 1 < this.reviews.length;
  }

  isLeftVisible(): boolean {
    return this.startIndex > 0;
  }

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
  submitReport(id: string) {
    if (this.reportForm.valid) {
      const reportData = this.reportForm.value;
      this.service.submitReport(reportData, id).subscribe(
        (response) => {
          console.log('Report submitted successfully');
        },
        (error) => {
          console.error('Error submitting report:', error);
        }
      );
    }
  }
  addToWishlist(): void {
    this.service.addToWishlist(this.apartmentData).subscribe({
      next: () => {
        console.log('Product added to wishlist successfully.');
        this.isInWishlist = true;
      },
      error: (error) => {
        console.error('Failed to add product to wishlist:', error);
      },
    });
  }

  removeFromWishlist(productId: string): void {
    this.service.removeFromWishlist(productId).subscribe({
      next: () => {
        console.log('Product removed from wishlist successfully.');
        this.isInWishlist = false;
      },
      error: (error) => {
        console.error('Failed to remove product from wishlist:', error);
      },
    });
  }
  checkWishlistStatus(productId: string): void {
    this.service.isInWishlist(productId).subscribe({
      next: (result) => {
        this.isInWishlist = result;
      },
      error: (error) => {
        console.error('Failed to check wishlist status:', error);
      },
    });
  }
}

export interface Review {
  rating: number;
  comment: string;
}
