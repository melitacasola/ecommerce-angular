import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { WordLimitPipe } from './pipes/wordLimit/word-limit.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    CardPrincipalComponent,
    WordLimitPipe,
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
  ],
  exports: [
    HeaderComponent,
    CardPrincipalComponent
  ]
})
export class SharedModule { }
