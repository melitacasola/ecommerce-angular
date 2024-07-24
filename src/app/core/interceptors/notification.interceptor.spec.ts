import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';

import { notificationInterceptor } from './notification.interceptor';
import { ITokens } from '../interfaces/tokens.interface';
import { AuthService } from '../services/authService/auth.service';

describe('NotificationInterceptor', () => {
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;


  beforeEach(() => {
    toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: ToastrService, useValue: toastrServiceSpy },
        provideHttpClient(withInterceptors([notificationInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const interceptor: HttpInterceptorFn = (req, next) => TestBed.inject(
      notificationInterceptor
    );

    expect(interceptor).toBeTruthy();
  });

  it('should call ToastrService.success on login success', () => {
    const mockResponse = { access_token: 'fake-token', refresh_token: 'fake-token' };

    httpClient.post('/api/login', { email: 'test@mail.com', password: 'password' }).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('/api/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);

    expect(toastrServiceSpy.success).toHaveBeenCalledWith('Logged in successfully', 'Success');
  });

});

