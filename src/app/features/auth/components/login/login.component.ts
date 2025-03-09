import { Component, inject, OnDestroy } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../core/services/authService/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  public authForm!: FormGroup;
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);

  private readonly destroy$ = new Subject<void>();

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
