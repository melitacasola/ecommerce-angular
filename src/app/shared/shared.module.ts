import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { WordLimitPipe } from './pipes/wordLimit/word-limit.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { SearchComponent } from './components/search/search.component';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [
    CardPrincipalComponent,
    HeaderComponent,
    NavbarComponent,
    DefaultImagePipe,
    SearchComponent,
    WordLimitPipe,
  ],
  imports: [
    AngularMaterialsModule,
    CommonModule,
    CoreModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    CardPrincipalComponent,
    HeaderComponent,
    NavbarComponent,
    DefaultImagePipe,
    SearchComponent
  ]
})
export class SharedModule { }
