import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { ILogin } from '../../../core/interfaces/login.interface';
import { map, Observable, tap } from 'rxjs';
import { ITokens } from '../../../core/interfaces/tokens.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject( HttpClient );
  private url = environment.baseUrl;

  login( loginForm: Partial<ILogin> ): Observable<ITokens> {
    return this.http.post<ITokens>( `${this.url}auth/login`, loginForm )
      .pipe(
        tap( response => sessionStorage.setItem( 'access_token', response.access_token ) )
      )
  }
}
