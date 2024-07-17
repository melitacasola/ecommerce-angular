import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject( Router );
  const isAuth = sessionStorage.getItem( "access_token" );

  if( isAuth ) return true;
  return router.navigate( ['auth/login'] );
};
