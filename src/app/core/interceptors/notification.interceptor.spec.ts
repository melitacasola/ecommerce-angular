import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { notificationInterceptor } from './notification.interceptor';
import { ToastrService } from 'ngx-toastr';

describe('NotificationInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        notificationInterceptor,
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['Success']),
        },
      ],
    })
  );

  it('should be created', () => {
    const interceptor: HttpInterceptorFn  = (req, next) => TestBed.inject(
      notificationInterceptor
    );

    expect(interceptor).toBeTruthy();
  });
});

