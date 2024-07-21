import { HoverElementDirective } from './hover-element.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('HoverElementDirective', () => {
  let elementRefMock: ElementRef;
  let renderer2Mock: Renderer2;
  let directive: HoverElementDirective;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('div'));
    renderer2Mock = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: elementRefMock },
        { provide: Renderer2, useValue: renderer2Mock }
      ]
    });

    directive = new HoverElementDirective(elementRefMock, renderer2Mock);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply styles on mouse enter', () => {
    directive.onMouseEnter();

    expect(renderer2Mock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'boxShadow',
      '0px 4px 8px rgba(0,0,0,0.3)'
    );
    expect(renderer2Mock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'backgroundColor',
      '#f5f5f5'
    );
    expect(renderer2Mock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'transform',
      'scale(1.01)'
    );
    expect(renderer2Mock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'transition',
      'all 0.3s ease-in-out'
    );
  });

  it('should remove styles on mouse leave', () => {
    directive.onMouseLeave();

    expect(renderer2Mock.removeStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'boxShadow'
    );
    expect(renderer2Mock.removeStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'transform'
    );
    expect(renderer2Mock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'backgroundColor',
      'transparent'
    );
    expect(renderer2Mock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'transition',
      'all 0.3s ease-in-out'
    );
  });
});

