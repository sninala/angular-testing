import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";

  }

}
