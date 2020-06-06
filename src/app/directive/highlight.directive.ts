import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = 'red';
  @HostBinding('style.fontSize') fs = '12px';
  constructor() { }

  @HostListener('mouseenter') mouseentre() {
    this.bg = 'yellow';
    this.fs = '24px';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'red';
    this.fs = '12px';
  }
}
