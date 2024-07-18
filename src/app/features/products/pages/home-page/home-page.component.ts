import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsComponent } from '../../../../shared/components/dialog-animations/dialog-animations.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private token = sessionStorage.getItem('access_token');
  private authService = inject(AuthService);
  public userValue!: boolean;

  ngOnInit(): void {
    this.authService.isAdmin().subscribe((response: boolean) => {
      this.userValue = response;
    }, (error) => {
      console.error('Error fetching user profile:', error);
    });

  }

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
