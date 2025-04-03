import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/authService/auth.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public isAdmin: boolean = false;
  private authService = inject(AuthService);
  private router = inject(Router);

  onLogout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

  ngOnInit(): void {
    this.authService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }
}
