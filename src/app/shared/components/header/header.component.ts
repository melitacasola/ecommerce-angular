import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router)


  onLogout(){
    this.authService.logout();
    this.router.navigate(['auth/login'])
  }
}
