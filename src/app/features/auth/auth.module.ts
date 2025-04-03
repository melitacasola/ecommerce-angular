import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
