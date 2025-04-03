import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/authService/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogged().pipe(
    map((isAuth) => {
      if (isAuth) {
        return true;
      } else {
        router.navigate(['auth/login']);
        return false;
      }
    })
  );
};
