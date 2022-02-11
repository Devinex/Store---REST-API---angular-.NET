import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtykulyService, Stronnicowanie } from '../artykuly.service';
import { KoszykService } from '../koszyk.service';


export interface Artykul {
  id: number;
  nazwa: string;
  opis: string;
  cena: number;
  src: string;
}

@Component({
  selector: 'app-artykul',
  templateUrl: './artykul.component.html',
  styleUrls: ['./artykul.component.css']
})
export class ArtykulComponent implements OnInit {
  @Input() artykul: Artykul;
 @Output() outputEmitter = new EventEmitter();
 wybierz: boolean = false;
 
 koszyk:Artykul[]=[];


 constructor(private koszykService:KoszykService,private artykulyService:ArtykulyService,private router: Router,private route:ActivatedRoute) { 

 }
 ngOnInit() {
  if(this.artykul == null) {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if(id >= 0) {
      this.artykulyService.getArtykul(id).subscribe(res => this.artykul = res);
    }
  }
 this.koszykService.pobierzKoszyk().subscribe(res => this.koszyk = res);

 }
 
 onWyczyscKoszyk() {
   this.koszykService.wyczyscKoszyk().subscribe(() => console.log("..."));
 }
 onDodajDoKoszyka(artykul: Artykul) {
   this.koszykService.dodajDoKoszyka(artykul);
   
}

  onKup(artykul: Artykul) {
    this.outputEmitter.emit(artykul);
  }
  onEdycja(){

    this.router.navigateByUrl('artykuly/' +this.artykul.id + '/edytuj');
  }
  onDodaj(){
    this.router.navigateByUrl('artykuly/nowy');
  }
  onWybierz() {
    this.router.navigateByUrl('artykuly/' + this.artykul.id);
    this.wybierz = !this.wybierz;
  }
 

}
