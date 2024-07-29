import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-use-list',
  templateUrl: './use-list.component.html',
  styleUrls: ['./use-list.component.scss']
})
export class UseListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  isLoading: boolean = false;
  searchTerm: string = '';


  constructor(private _UserService: UserService, private router: Router) { }



  ngOnInit(): void {
    this.fetchUsers();

  }

  fetchUsers(): void {
    this.isLoading = true;
    this._UserService.getUsers(this.page).subscribe(response => {
      this.users = response.data;
      this.isLoading = false;
    });
  }


  onUserClick(userId: number): void {
    this.router.navigate([`/user/${userId}`]);
  }

  onSearch(): void {
    const userId = parseInt(this.searchTerm, 10);
    if (!isNaN(userId)) {
      this.router.navigate([`/user/${userId}`]);
    } else {
      alert('Invalid ID format');
    }
  }
}
