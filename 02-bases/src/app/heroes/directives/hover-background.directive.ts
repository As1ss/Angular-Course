import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'lightgray';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
