import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ILogin } from '../../../../core/interfaces/login.interface';
import { AuthService } from '../../../../core/services/authService/auth.service';

interface AuthInterface {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm: FormGroup<AuthInterface> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    this.authService
      .login(this.loginForm.value as ILogin)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: (err) => console.error('Login failed', err),
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
