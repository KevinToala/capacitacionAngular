import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltarTexto]'
})
export class ResaltarTextoDirective {

  @Input('appResaltarTexto')
  public color: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter')
  resaltar() {
    this.cambiarBackgroundColor(this.color || 'yellow');
  }

  @HostListener('mouseleave')
  limpiar() {
    this.cambiarBackgroundColor(null);
  }

  cambiarBackgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
