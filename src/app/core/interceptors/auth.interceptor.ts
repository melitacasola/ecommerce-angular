import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const token = sessionStorage.getItem( "access_token" );
  // const isAuth = inject(AuthService).isLogged()
  // console.log('estoy aca?!!?!?!?', token);
  
  // // const parseToken = JSON.parse(token)
  // if( token && isAuth ) {
  //   console.log('estoy aca', token);
  //   console.log(req, 'aca?');
    
  //   const request = req.clone({
  //     headers: req.headers.set( 'Authorization', token )
  //     // setHeaders: {
  //     //   Authorization: `Bearer ${token}`
  //     // }
  //   });
  //   console.log('estoy saliendo', token);

  //   return next( request );
  // }
  // return next(req);
  const token = sessionStorage.getItem("access_token");

  // Lista de URLs que no requieren autenticación
  const noAuthUrls = [
    `${environment.baseUrl}auth/login`,
    // Agrega más URLs si es necesario
  ];

  const requiresAuth = !noAuthUrls.some(url => req.url.includes(url));

  if (token && requiresAuth) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
