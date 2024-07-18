import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  public isAdmin: boolean = false
  private authService = inject(AuthService);
  private router = inject(Router)

  onLogout(){
    this.authService.logout();
    this.router.navigate(['auth/login'])
  }

  ngOnInit(): void {
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }
}
