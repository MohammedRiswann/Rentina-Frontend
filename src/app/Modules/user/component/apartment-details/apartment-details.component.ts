import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/propertyService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../../services/data-sharing.service';

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
  reportForm!: FormGroup;
  review: any = {};
  reviews: Review[] = [];
  messageSubmit = '';
  displayedReviews: Review[] = [];
  startIndex = 0;
  count = 4;
  sellerId: any;
  showMoreButton = true;
  isInWishlist: boolean = false;
  ReportMessage: string = '';
  idProofApproved: boolean | null = null;
  items: any;
  isPending: boolean | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: PropertyService,
    private fb: FormBuilder,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.apartmentData = response['id'];
      console.log(this.apartmentData);
    });
    if (this.apartmentData) {
      this.getApartmentDetails(this.apartmentData);
    }
    this.getReviews(this.apartmentData);

    this.reportForm = this.fb.group({
      reason: ['', Validators.required],
    });
    this.dataSharingService.items$.subscribe((items) => {
      this.items = items;
      console.log(items);
    });
    this.getIsPending(this.apartmentData);
  }

  getApartmentDetails(userId: string) {
    this.service.getApartmentDetails(userId).subscribe((response) => {
      this.details = response;
      console.log(response.userId);
      this.sellerId = this.details.userId;
      console.log(response);
    });
  }
  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
  submitReport(id: string) {
    console.log('hello report');

    const reportData = this.reportForm.value;
    console.log(reportData);

    this.service.submitReport(reportData, id).subscribe(
      (response) => {
        this.ReportMessage = response.message;
        console.log('Report submitted successfully', response);
      },
      (error) => {
        console.error('Error submitting report:', error);
      }
    );
  }
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
  loadPaymentApproval(id: string) {
    this.service.getApproved(id).subscribe((response) => {
      console.log(response);
    });
  }
  getIsPending(id: string) {
    this.service.getPending(id).subscribe((response) => {
      console.log(response);
      if (response.details.isPending) {
        this.isPending = true;
      }
    });
  }
}
export interface Review {
  rating: number;
  comment: string;
}
