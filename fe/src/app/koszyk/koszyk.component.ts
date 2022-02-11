import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artykul } from '../artykul/artykul.component';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements OnInit {

 
  @Output() wyczysc = new EventEmitter();
 @Input () koszyk: Artykul[];
  
 
 
  constructor(private koszykService:KoszykService) { }
  ngOnInit(): void {

    this.koszykService.pobierzKoszyk().subscribe(res=>this.koszyk=res);
  }
 
 

  onWyczyscKoszyk() {
    this.koszykService.wyczyscKoszyk().subscribe(() => console.log("..."));
 
  }

}
