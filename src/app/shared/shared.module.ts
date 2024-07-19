import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { WordLimitPipe } from './pipes/wordLimit/word-limit.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import {MatListModule} from '@angular/material/list'
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CardPrincipalComponent,
    CategoryMenuComponent,
    HeaderComponent,
    NavbarComponent,
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
    CategoryMenuComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
