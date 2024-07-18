import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HandleErrorService } from '../services/error/handle-error.service';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject( HandleErrorService );
  const snackBar = inject( MatSnackBar );

  return next(req).pipe (
    catchError(( error: HttpErrorResponse ) => {
      let errorMsg: string;
      if( error.error instanceof ErrorEvent ) {
        errorMsg = errorService.getClientError( error );
        snackBar.open('patata');
      }else {
        errorMsg = errorService.getServerError( error );
        snackBar.open('patata2');
      }
      return throwError( () => new Error( errorMsg ));
    })
  )
};
