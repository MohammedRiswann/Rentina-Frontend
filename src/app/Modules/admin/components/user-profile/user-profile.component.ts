import { Component } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userData: string = '';
  userProfile: any;

  constructor(
    private service: UserListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.userData = response['id'];
    });
    if (this.userData) {
      this.getProfile(this.userData);
    }
  }

  getProfile(userId: string) {
    this.service.getProfile(userId).subscribe((response) => {
      console.log(response);

      this.userProfile = response;
    });
  }
}
