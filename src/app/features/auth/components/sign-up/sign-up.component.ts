import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '../../../../../environments/environments';
import { IRegister } from '../../../../core/interfaces/user.interface';
import { AuthService } from '../../../../core/services/authService/auth.service';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private toastrService = inject(ToastrService);
  private router = inject(Router);

  public registerForm: FormGroup =  this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['customer'],
      avatar: [''],
    });
  

  onSubmit(): void {
    const formRegister = this.registerForm.value as IRegister;

    if (!formRegister.avatar) {
      formRegister.avatar = environment.urlAvatarUserDefault;
    }
    if (this.registerForm.invalid) return;

    this.authService
      .register(formRegister)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.toastrService.error('Login failed after registration', err)
        },
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
