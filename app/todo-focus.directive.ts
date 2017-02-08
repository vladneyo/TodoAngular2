import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[todoFocus]'
})
export class TodoFocusDirective {

  constructor(private el: ElementRef) { }

  private prevColor: string = "";

  @HostListener('mouseenter') onMouseEnter() {
    this.prevColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = "transparent";
    this.el.nativeElement.style.outline = "3px solid #3786D0";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.prevColor;
    this.el.nativeElement.style.outline = null;
  }
}