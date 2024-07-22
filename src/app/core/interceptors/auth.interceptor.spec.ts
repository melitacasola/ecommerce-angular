import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

// import { TestBed } from '@angular/core/testing';
// import {
//   HttpTestingController,
//   provideHttpClientTesting,
// } from '@angular/common/http/testing';
// import {
//   HttpClient,
//   provideHttpClient,
//   withInterceptors,
// } from '@angular/common/http';
// import { authInterceptor } from './auth.interceptor';
// import { ITokens } from '../interfaces/tokens.interface';

// describe('AuthInterceptor', () => {
//   let httpTestingController: HttpTestingController;
//   let httpClient: HttpClient;
//   let token: ITokens

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       // here are the KEY changes
//       providers: [
//         provideHttpClient(withInterceptors([authInterceptor])),
//         provideHttpClientTesting(),
//       ],
//     });
//     httpTestingController = TestBed.inject(HttpTestingController);
//     httpClient = TestBed.inject(HttpClient);
//   });

//   afterEach(() => {
//     httpTestingController.verify();
//   });

//   it('should add auth headers ', () => {
//     //arrange
//     const url = '/mockendpoint';

//     //act
//     httpClient.get(url).subscribe();

//     // assert
//     const req = httpTestingController.expectOne(url);
//     expect(req.request.headers.get('Authorization')).toEqual(
//       `Bearer ${token}`
//     );
//   });
// });
