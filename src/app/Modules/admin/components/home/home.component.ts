import { Component, OnInit } from '@angular/core';
import { SellerListService } from '../../services/seller-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponentAdmin implements OnInit {
  apartmentId: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((resposne) => {
      this.apartmentId = resposne['id'];
    });
    console.log(this.apartmentId);
  }
}
