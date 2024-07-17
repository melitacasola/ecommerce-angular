import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
  { path: 'aboutus', loadChildren: () => import('./features/about-us/about-us-routing.module').then(m => m.AboutUsRoutingModule)},
  { path: 'home', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)},
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
