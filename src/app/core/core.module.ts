import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { SERVICE_CONFIG } from './services/genericService/config/service-config';
import { handleErrorInterceptor } from './interceptors/handle-error.interceptor';
import { notificationInterceptor } from './interceptors/notification.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptors([notificationInterceptor])),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(withInterceptors([handleErrorInterceptor])),
  {
    provide: SERVICE_CONFIG,
    useValue: { resourceEndpoint: 'users' }
  },
  {
    provide: SERVICE_CONFIG,
    useValue: { resourceEndpoint: 'products' }
  }
  ]
})
export class CoreModule { }
