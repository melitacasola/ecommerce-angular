import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './interceptors/auth.interceptor';
import { handleErrorInterceptor } from './interceptors/handle-error.interceptor';
import { notificationInterceptor } from './interceptors/notification.interceptor';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay/loading-overlay.component';
import { LoadInterceptor } from './interceptors/load.interceptor';



@NgModule({
  declarations: [
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(withInterceptors([handleErrorInterceptor])),
    provideHttpClient(withInterceptors([LoadInterceptor])),
    provideHttpClient(withInterceptors([notificationInterceptor])),

  ],
  exports: [LoadingOverlayComponent]
})
export class CoreModule { }
