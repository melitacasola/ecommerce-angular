import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersIdPageComponent } from './pages/users-id-page/users-id-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '../../shared/shared.module';
import { SERVICE_CONFIG } from '../../core/services/genericService/config/service-config';
import { GenericService } from '../../core/services/genericService/generic.service';
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';
import { EditUserComponent } from './pages/components/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersPageComponent,
    UsersIdPageComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    AngularMaterialsModule,
    ReactiveFormsModule
  ],
  providers: [
    GenericService,
    {
      provide: SERVICE_CONFIG,
      useValue: {resourceEndpoint: 'users'}
    }
  ]
})
export class UsersModule { }
