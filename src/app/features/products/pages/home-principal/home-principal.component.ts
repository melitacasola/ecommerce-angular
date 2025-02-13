import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../../../core/interfaces/user.interface';
import { AuthService } from '../../../../core/services/authService/auth.service';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.scss',
})
export class HomePrincipalComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  public userHome?: IUser;

  ngOnInit(): void {
    this.authService.userHome().subscribe({
      next: (res: IUser) => {
        (this.userHome = res), this.router.navigate([`/home`]);
      },
    });
  }

  goToProducts(): void {
    this.router.navigate([`/home/products`]);
  }

  goToAboutUs(): void {
    this.router.navigate([`/aboutus`]);
  }
}
