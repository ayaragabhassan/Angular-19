import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeDirectiveExample]',
  standalone: false
})
export class CustomeDirectiveExample {

  @Input() highlightColor!: string;
  @Input() defaultColor='';

  
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostBinding('style.backgroundColor') backgreound: string;

  @HostListener('mouseover') OnMouseOver() {
    // this.Highlight('red');
    this.Highlight(this.highlightColor ||this.defaultColor || 'blue');
  }
  @HostListener('mouseleave') OnMouseLeave() {
    this.Highlight('');
  }
  private Highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor= color;
    this.backgreound = color;
  }


}

