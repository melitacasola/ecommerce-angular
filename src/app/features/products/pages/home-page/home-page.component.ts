import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/authService/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private authService = inject(AuthService);
  public userValue!: boolean;

  ngOnInit(): void {
    this.authService.isAdmin().subscribe((response: boolean) => {
      this.userValue = response;
    }, (error) => {
      console.error('Error fetching user profile:', error);
    });
  }

}
