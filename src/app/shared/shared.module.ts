import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { MatListModule } from '@angular/material/list';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { GoBackDirective } from './directives/goBack/go-back.directive';
import { HoverElementDirective } from './directives/hoverElement/hover-element.directive';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { FilterCategyPipe } from './pipes/filter-category/filter-categy.pipe';
import { WordLimitPipe } from './pipes/wordLimit/word-limit.pipe';

@NgModule({
  declarations: [
    CardPrincipalComponent,
    FooterComponent,
    GenericTableComponent,
    HeaderComponent,
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

    SearchComponent,
    FooterComponent,
    DefaultImagePipe,
    FilterCategyPipe,
    CardSimpleComponent,
  ],
})
export class SharedModule {}
