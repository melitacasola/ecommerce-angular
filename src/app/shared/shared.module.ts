import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
