import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';
import { state } from '@angular/animations';
import { tap } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);

  return authService.isAdmin()
    .pipe(
      tap(isRoleAdmin => console.log('isAdmin?', isRoleAdmin)),
      tap(isRoleAdmin => {
        if (!isRoleAdmin) {
          router.navigate(['/home'])
        }
      }),
    )
};
