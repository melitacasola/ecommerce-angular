import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { publicGuard } from './core/guards/public.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), canActivate: [publicGuard]},
  { path: 'aboutus', loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule)},
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule), canActivate: [authGuard, roleGuard] },
  { path: 'home', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule), canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
