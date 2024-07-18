import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HandleErrorService } from '../services/error/handle-error.service';
import { catchError, throwError } from 'rxjs';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject( HandleErrorService );

  return next(req).pipe (
    catchError(( error: HttpErrorResponse ) => {
      let errorMsg: string;
      if( error.error instanceof ErrorEvent ) {
        errorMsg = errorService.getClientError( error );
      }else {
        errorMsg = errorService.getServerError( error );
      }
      return throwError( () => new Error( errorMsg ));
    })
  )
};
