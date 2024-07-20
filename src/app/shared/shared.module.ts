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
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { FilterCategyPipe } from './pipes/filter-category/filter-categy.pipe';


@NgModule({
  declarations: [
    CardPrincipalComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,

    DefaultImagePipe,
    FilterCategyPipe,
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
    SearchComponent,
    FooterComponent,

    DefaultImagePipe,
    FilterCategyPipe
  ]
})
export class SharedModule { }
