import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/propertyService.service';
import { SocketService } from 'src/app/common/services/socket.service';

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

  constructor(
    private route: ActivatedRoute,
    private service: PropertyService,
    private socket: SocketService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.apartmentData = response['id'];
      console.log(this.apartmentData);
      this.getReviews(this.apartmentData);
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
      console.log(response, 'hello');
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
}

export interface Review {
  rating: number;
  comment: string;
}
