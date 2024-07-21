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
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { HoverElementDirective } from './directives/hoverElement/hover-element.directive';
import { GoBackDirective } from './directives/goBack/go-back.directive';


@NgModule({
  declarations: [
    CardPrincipalComponent,
    FooterComponent,
    GenericTableComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,

    DefaultImagePipe,
    FilterCategyPipe,
    WordLimitPipe,
    CardSimpleComponent,
    HoverElementDirective,
    GoBackDirective,
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
    GenericTableComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    DefaultImagePipe,
    FilterCategyPipe,
    CardSimpleComponent
  ]
})
export class SharedModule { }
