import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersIdPageComponent } from './pages/users-id-page/users-id-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        component: UsersPageComponent
      }, {
        path: ':id',
        component: UsersIdPageComponent
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
