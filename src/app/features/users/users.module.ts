import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersIdPageComponent } from './pages/users-id-page/users-id-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UsersPageComponent,
    UsersIdPageComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
