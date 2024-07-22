import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import { environment } from '../../../../environments/environments';
import { ILogin } from '../../interfaces/login.interface';
import { ITokens } from '../../interfaces/tokens.interface';
import { IRegister, IUser } from '../../interfaces/user.interface';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.baseUrl

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in the user', () => {
    const loginForm: Partial<ILogin> = { email: 'maria@mail.com', password: '12345' };
    const mockResponse: ITokens = { access_token: 'fake-token', refresh_token: 'fake-token' };

    service.login(loginForm).subscribe({
      next: response => {
      expect(response).toEqual(mockResponse);
      expect(sessionStorage.getItem('access_token')).toEqual('fake-token');
    },
    error: () => fail('error')
    });

    const req = httpMock.expectOne(`${baseUrl}auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should return if user is admin', () => {
    const mockResponse: IUser = { id: 1, name: 'Admin', role: 'admin', email: 'admin@example.com', password: 'admin123', avatar: '/assets/admin.jpg' };

    sessionStorage.setItem('access_token', 'fake-token');

    service.isAdmin().subscribe(isAdmin => {
      expect(isAdmin).toBeTrue();
    });

    const req = httpMock.expectOne(`${baseUrl}auth/profile`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle registration failure', () => {
    const registerForm: IRegister = { name: 'test', email: 'test@example.com', password: 'password', role: 'customer' };
    const mockUser = { id: 1, name: 'Admin', role: 'admin', email: 'admin@example.com', password: 'admin123', avatar: '/assets/admin.jpg' };

    service.register(registerForm).subscribe({
      next: response => {
        expect(response).toEqual(mockUser);
      },
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toEqual('Registration failed');
      }
    });

    const req = httpMock.expectOne(`${baseUrl}users`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

});





// import { TestBed } from '@angular/core/testing';

// import { GenericService } from './generic.service';
// import { Product } from '../interfaces/product/product.interface';
// import {
//   HttpTestingController,
//   provideHttpClientTesting,
// } from '@angular/common/http/testing';
// import { provideHttpClient, HttpErrorResponse } from '@angular/common/http';
// import { environment } from '@/environments/environment.development';

// const DUMMY_RESPONSE = [
//   {
//     title: 'title',
//     price: 1,
//     description: 'description',
//     images: ['imageUrl'],
//     category: {
//       id: 1,
//       name: 'categoryName',
//       image: 'categoryImage',
//       creationAt: '2021-01-01T00:00:00.000Z',
//       updatedAt: '2021-01-01T00:00:00.000Z',
//     },
//     id: 1,
//     creationAt: '2021-01-01T00:00:00.000Z',
//     updatedAt: '2021-01-01T00:00:00.000Z',
//   },
// ];

// describe('Generic Service Successfully', () => {
//   let service: GenericService<Product>;
//   let httpTesting: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         GenericService,
//         provideHttpClient(),
//         provideHttpClientTesting(),
//       ],
//     });

//     service = TestBed.inject(GenericService);
//     httpTesting = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpTesting.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('#getAll should get all products and return Observable<Product>', () => {
//     service.getAll('products').subscribe({
//       next: products => {
//         expect(products).toBeTruthy();
//         expect(products).toEqual(DUMMY_RESPONSE);
//       },
//       error: () => fail('should not throw error'),
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products');
//     expect(req.request.method).toBe('GET');
//     req.flush(DUMMY_RESPONSE);
//   });

//   it('#getOne should get one product by id and return Observable<Product>', () => {
//     service.getOne('products/', 1).subscribe({
//       next: product => {
//         expect(product).toBeTruthy();
//         expect(product).toEqual(DUMMY_RESPONSE[0]);
//       },
//       error: () => fail('should not throw error'),
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products/' + 1);
//     expect(req.request.method).toBe('GET');
//     req.flush(DUMMY_RESPONSE[0]);
//   });

//   it('#create should create a product and return Observable<Product>', () => {
//     service.create('products', DUMMY_RESPONSE[0]).subscribe({
//       next: product => {
//         expect(product).toBeTruthy();
//         expect(product).toEqual(DUMMY_RESPONSE[0]);
//       },
//       error: () => fail('should not throw error'),
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products');
//     expect(req.request.method).toBe('POST');
//     req.flush(DUMMY_RESPONSE[0]);
//   });

//   it('#update should update a product by id and and return Observable<Product>', () => {
//     service.update('products/', 1, DUMMY_RESPONSE[0]).subscribe({
//       next: product => {
//         expect(product).toBeTruthy();
//         expect(product).toEqual(DUMMY_RESPONSE[0]);
//       },
//       error: () => fail('should not throw error'),
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products/' + 1);
//     expect(req.request.method).toBe('PUT');
//     req.flush(DUMMY_RESPONSE[0]);
//   });

//   it('#delete should delete a product by id and return Observable<void>', () => {
//     service.delete('products/', 1).subscribe({
//       next: () => {
//         expect(true).toBeTrue();
//       },
//       error: () => fail('should not throw error'),
//       complete: () => expect(true).toBeTrue(),
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products/' + 1);
//     expect(req.request.method).toBe('DELETE');
//     req.flush(null);
//   });
// });

// describe('Generic Service 400 Errors', () => {
//   let service: GenericService<Product>;
//   let httpTesting: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         GenericService,
//         provideHttpClient(),
//         provideHttpClientTesting(),
//       ],
//     });

//     service = TestBed.inject(GenericService);
//     httpTesting = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpTesting.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('#getOne should handle 404 error when getting a product', () => {
//     const errorMessage404 = 'Test 404 error';

//     service.getOne('products/', 2).subscribe({
//       next: () => fail('Expect an error, not product'),
//       error(e: HttpErrorResponse) {
//         expect(e.status).toBe(404);
//         expect(e.error).toContain(errorMessage404);
//       },
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products/' + 2);
//     expect(req.request.method).toBe('GET');

//     req.flush('Test 404 error', { status: 404, statusText: 'Not Found' });
//   });
// });

// describe('Generic Service 500 Errors', () => {
//   let service: GenericService<Product>;
//   let httpTesting: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         GenericService,
//         provideHttpClient(),
//         provideHttpClientTesting(),
//       ],
//     });

//     service = TestBed.inject(GenericService);
//     httpTesting = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpTesting.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('#getOne should handle 500 error when getting a product', () => {
//     const errorMessage500 = 'Test 500 error';

//     service.getOne('products/', 1).subscribe({
//       next: () => fail('Expect an error, not product'),
//       error(e: HttpErrorResponse) {
//         expect(e.status).toBe(500);
//         expect(e.error).toContain(errorMessage500);
//       },
//     });

//     const req = httpTesting.expectOne(environment.API_URL + 'products/' + 1);
//     expect(req.request.method).toBe('GET');

//     req.flush('Test 500 error', {
//       status: 500,
//       statusText: 'Internal Server Error',
//     });
//   });
// });
