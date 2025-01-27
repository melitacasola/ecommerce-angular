import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';


@NgModule({
  declarations: [
    AboutUsPageComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    AngularMaterialsModule
  ]
})
export class AboutUsModule { }
