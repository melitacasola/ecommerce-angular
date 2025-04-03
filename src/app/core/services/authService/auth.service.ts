import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { ILogin } from '../../interfaces/login.interface';
import { ITokens } from '../../interfaces/tokens.interface';
import { IRegister, IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private url = environment.baseUrl;

  login(credentials: ILogin): Observable<ITokens> {
    return this.http.post<ITokens>(`${this.url}auth/login`, credentials).pipe(
      tap((response) =>
        sessionStorage.setItem('access_token', response.access_token)
      ),
      catchError(() => {
        throw new Error('Login failed');
      })
    );
  }

  isAdmin(): Observable<boolean> {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      throw new Error('User is not authenticated');
    }
    return this.http.get<IUser>(`${this.url}auth/profile`).pipe(
      map((response) => response.role === 'admin'),
      catchError(() => of(false))
    );
  }

  getUserProfile(): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}auth/profile`);
  }

  isLogged(): Observable<boolean> {
    return of(!!sessionStorage.getItem('access_token'));
  }

  logout(): void {
    sessionStorage.removeItem('access_token');
  }

  register(registerForm: IRegister): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}users`, registerForm).pipe(
      catchError(() => {
        throw new Error('Registration failed');
      })
    );
  }
}
