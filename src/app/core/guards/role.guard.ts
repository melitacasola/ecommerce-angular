import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/authService/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAdmin().pipe(
    tap((isRoleAdmin) => {
      if (!isRoleAdmin) {
        router.navigate(['/home']);
      }
    })
  );
};
