import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private token = sessionStorage.getItem('access_token');
  private authService = inject(AuthService);
  public userValue!: string;

  ngOnInit(): void {
    console.log('HOLA DESDE HOME PAGE', this.token)

    this.authService.isAdmin().subscribe((response: string) => {
      this.userValue = response;
      console.log('User value:', this.userValue);
    }, (error) => {
      console.error('Error fetching user profile:', error);
    });

  }
}
