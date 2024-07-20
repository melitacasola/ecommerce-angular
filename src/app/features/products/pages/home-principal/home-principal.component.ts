import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { IUser } from '../../../../core/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.scss'
})
export class HomePrincipalComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  public userHome?: IUser;

  ngOnInit(): void {
    this.authService.userHome().subscribe({
      next: (res: IUser) => {this.userHome = res, console.log(res)}
    })
  }

  goToProducts(): void {
    this.router.navigate([`/home/products`])
  }

  goToAboutUs(): void {
    this.router.navigate([`/aboutus`])
  }
}
