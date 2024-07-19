import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { ProductsRoutingModule } from './products-routing.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductIdPageComponent } from './pages/product-id-page/product-id-page.component';
import { SERVICE_CONFIG } from '../../core/services/genericService/config/service-config';
import { GenericService } from '../../core/services/genericService/generic.service';
import { CategoriesFilterComponent } from './components/categories-filter/categories-filter.component';
import { AngularMaterialsModule } from '../../shared/angular-materials/angular-materials.module';


@NgModule({
  declarations: [
    HomePageComponent,
    ProductsPageComponent,
    ProductIdPageComponent,
    CategoriesFilterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AngularMaterialsModule,
    SharedModule,
],
providers: [
  GenericService,
  {
    provide: SERVICE_CONFIG,
    useValue: {resourceEndpoint: 'products'}
  },
]
})
export class ProductsModule { }
