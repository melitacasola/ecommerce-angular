import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {
  constructor(private location: Location) {}

  @HostListener('click') onClick(): void {
    this.location.back();
  }

}
