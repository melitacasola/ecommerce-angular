import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
