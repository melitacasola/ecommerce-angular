import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem("access_token");

  const AuthUrls = [
    `${environment.baseUrl}auth/profile`,
  ];

  const requiresAuth = AuthUrls.some(url => req.url.includes(url));

  if (requiresAuth) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
