import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap, map } from 'rxjs';
import { AuthService } from '../services/authService/auth.service';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogged().pipe(
    tap(isAuth => console.log('Authentication Status:', isAuth)),
    map(isAuth => {
      if (isAuth) {
        router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }),
  );
};
