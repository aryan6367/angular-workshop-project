import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]',
  standalone: true
})
export class DirectiveDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color='green';
    
   }

}

