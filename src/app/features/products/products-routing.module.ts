import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePrincipalComponent } from './pages/home-principal/home-principal.component';
import { ProductIdPageComponent } from './pages/product-id-page/product-id-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        component: HomePrincipalComponent,
      },
      {
        path: 'products',
        component: ProductsPageComponent,
      },
      {
        path: 'products/:id',
        component: ProductIdPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
