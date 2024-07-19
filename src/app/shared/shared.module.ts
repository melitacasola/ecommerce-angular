import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { WordLimitPipe } from './pipes/wordLimit/word-limit.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CardPrincipalComponent,
    WordLimitPipe,
    NavbarComponent,
    DefaultImagePipe,
    SearchComponent,
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
    DefaultImagePipe,
    SearchComponent
  ]
})
export class SharedModule { }
