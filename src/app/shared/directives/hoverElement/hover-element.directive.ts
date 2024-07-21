import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverElement]'
})
export class HoverElementDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setHoverEffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHoverEffect(false);
  }

  private setHoverEffect(isHovered: boolean) {
    if (isHovered) {
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0px 4px 8px rgba(0,0,0,0.3)');
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f5f5f5');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.01)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
    }
  }

}
