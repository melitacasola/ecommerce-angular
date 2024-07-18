import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { ILogin } from '../interfaces/login.interface';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { ITokens } from '../interfaces/tokens.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private url = environment.baseUrl;

  login(loginForm: Partial<ILogin>): Observable<ITokens> {
    return this.http.post<ITokens>(`${this.url}auth/login`, loginForm)
      .pipe(
        tap(response => sessionStorage.setItem('access_token', response.access_token)),
      )
  }

  isAdmin(): Observable<boolean> {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      throw new Error('User is not authenticated');
    }

    return this.http.get<IUser>(`${this.url}auth/profile`)
      .pipe(
        map(response => response.role === 'admin'),
        catchError(() => of(false)),
        tap(response => console.log(response))
      );
  }

}
