import { TestBed } from '@angular/core/testing';

import { NotificationErrorService } from './notification-error.service';

describe('NotificationErrorService', () => {
  let service: NotificationErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
