import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoltyTekst]'
})
export class ZoltyTekstDirective {

  @HostBinding('style.color') kolor = "black";
 

  @HostListener('mouseover') mouseon() {
    this.kolor = 'yellow';
  
  }

  @HostListener('mouseout') mouseout() {
    this.kolor = 'black';
  
  }
  constructor() { }

}
