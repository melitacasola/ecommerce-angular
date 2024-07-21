import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { GoBackDirective } from './go-back.directive';

describe('GoBackDirective', () => {
  let location: Location;
  let directive: GoBackDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoBackDirective,
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) }
      ]
    });

    location = TestBed.inject(Location);
    directive = new GoBackDirective(location);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call location.back on click', () => {
    directive.onClick();
    expect(location.back).toHaveBeenCalled();
  });
});
