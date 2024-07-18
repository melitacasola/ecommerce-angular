import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductIdPageComponent } from './pages/product-id-page/product-id-page.component';
import { SharedModule } from "../../shared/shared.module";
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';


@NgModule({
  declarations: [
    HomePageComponent,
    ProductsPageComponent,
    ProductIdPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    AngularMaterialsModule
]
})
export class ProductsModule { }
