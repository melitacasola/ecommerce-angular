import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { WordLimitPipe } from './pipes/wordLimit/word-limit.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardPrincipalComponent,
    WordLimitPipe,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardPrincipalComponent,
    HeaderComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
