import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNiebieskiTekst]'
})
export class NiebieskiTekstDirective {
  @HostBinding('style.color') kolor = "black";
  @HostBinding('class.duzy-tekst') duzyTekst = false;

  @HostListener('mouseover') mouseon() {
    this.kolor = 'blue';
    this.duzyTekst = true;
  }

  @HostListener('mouseout') mouseout() {
    this.kolor = 'black';
    this.duzyTekst = false;
  }
  constructor() { }

}
