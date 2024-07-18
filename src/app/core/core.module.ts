import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { GenericService } from './services/genericService/generic.service';
import { IUser } from './interfaces/user.interface';
import { IProduct } from './interfaces/product.interface';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor])),
  {
    provide: 'usersService',
    useFactory: () =>
      new GenericService<IUser>({
        resourceEndpoint: 'users',
      }),
    deps: [HttpClient],
  },
  {
    provide: 'productsService',
    useFactory: () =>
      new GenericService<IProduct>({
        resourceEndpoint: 'products',
      }),
    deps: [HttpClient],
  }
  ]
})
export class CoreModule { }
