import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
