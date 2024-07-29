import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _UserService: UserService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.fetchUser(userId);
    });
  }

  fetchUser(userId: number): void {
    this.isLoading = true;
    this._UserService.getUser(userId).subscribe(response => {
      this.user = response.data;
      this.isLoading = false;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

