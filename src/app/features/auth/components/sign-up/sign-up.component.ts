import { Component, inject, OnInit } from '@angular/core';
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
export class SignUpComponent implements OnInit {
  private destroy$ = new Subject<void>();

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private toastrService = inject(ToastrService);
  private router = inject(Router);

  public registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['customer'],
      avatar: [''],
    });
  }

  onSubmit(): void {
    const formData = this.registerForm.value as IRegister;

    if (!formData.avatar) {
      formData.avatar = environment.urlAvatarUserDefault;
    }

    this.authService
      .register(formData)
      .pipe(
        takeUntil(this.destroy$)
        // switchMap((user) => {
        //   this.toastrService.success('User created successfully!', 'Success');
        //   return this.authService.login({
        //     email: user.email,
        //     password: user.password,
        //   });
        //   //catchError(() => {para qe no falle el login}) o si falla quedarme en register.
        // })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.toastrService.error('Login failed after registration', err);
          // this.router.navigate(['/auth/login']);
        },
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
