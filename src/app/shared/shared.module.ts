import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { DialogAnimationsComponent } from './components/dialog-animations/dialog-animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
    DialogAnimationsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
