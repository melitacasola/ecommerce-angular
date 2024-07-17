import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { ILogin } from '../interfaces/login.interface';
import { filter, map, Observable, of, tap } from 'rxjs';
import { ITokens } from '../interfaces/tokens.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject( HttpClient );
  private url = environment.baseUrl;

  login( loginForm: Partial<ILogin> ): Observable<ITokens> {
    return this.http.post<ITokens>( `${this.url}auth/login`, loginForm )
      .pipe(
        tap( response => sessionStorage.setItem( 'access_token', response.access_token) ),
        tap(response => console.log('acaen sercicio',  ))
      )
  }

  isAdmin(): Observable<IUser> {
    // Asegúrate de que el token está disponible antes de hacer la solicitud
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      throw new Error('User is not authenticated');
    }
    
    return this.http.get<IUser>(`${this.url}auth/profile`)
      .pipe(
        tap(response => console.log('Profile response:', response)),
        map(response => response)
      );
  }

  // isAdmin(): Observable<IUser> {
  //   return this.http.get<IUser>( 'https://api.escuelajs.co/api/v1/auth/profile' )
  //     .pipe(
  //       tap(response => console.log('entra==?', response)),
  //       map( response => response ),
  //     )
  // }
}
