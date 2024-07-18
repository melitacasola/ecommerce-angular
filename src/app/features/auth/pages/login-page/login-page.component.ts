import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public authForm!: FormGroup;
  private fb = inject( NonNullableFormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );
  
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  

 onSubmit(): void {
  this.authService.login( this.loginForm.value ).subscribe({
    next: () => {
      this.router.navigate( ['home'] );
    }
  })
  
 }
}