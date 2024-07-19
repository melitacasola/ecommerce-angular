import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { IRegister } from '../../../../core/interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private registerService = inject(AuthService)
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
    })
  }


  onSubmit(): void {
    const formData = this.registerForm.value as IRegister;

    if (!formData.avatar) {
      formData.avatar = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lasprovincias.es%2Fsociedad%2Fmascotas%2Fgatos-saben-tristes-20211204214309-nt.html&psig=AOvVaw2DuWjWKv8ZJmwownpIVqEs&ust=1721510166292000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICPwZeEtIcDFQAAAAAdAAAAABAw';
    }


    this.registerService.register(formData).subscribe({
      next: (user) => {
        this.toastrService.success('User created successfully!', 'Success');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error("Error durante el registro:", err);
        this.toastrService.error('Error during user creation!', 'Error');
      }
    })
  }
}
