import { Component } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users: any;

  constructor(
    private userService: UserListService,
    private blockService: BlockService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
  toggleBlockStatus(userId: string, status: string) {
    this.blockService
      .toggleUserBlockStatus(userId, status)
      .subscribe((response) => {
        this.getUsers();
      });
  }
}
