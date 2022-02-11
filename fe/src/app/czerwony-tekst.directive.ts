import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCzerwonyTekst]'
})
export class CzerwonyTekstDirective {

  @HostBinding('style.color') kolor = "Red";
  @HostBinding('class.duzy-tekst') duzyTekst = false;

  
  
  constructor() { }

}
