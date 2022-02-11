import { Component, OnInit } from '@angular/core';
import { Artykul } from '../artykul/artykul.component';
import { ArtykulyService, Stronnicowanie } from '../artykuly.service';

@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})
export class ArtykulyComponent implements OnInit {
  wyswietlArtykuly: boolean =true;
  stronnicowanie: Stronnicowanie ={
    strona:1,
    ilosc:3
 
  };
 
  artykuly:Artykul[]=[];

  constructor(private artykulyService:ArtykulyService){}

  ngOnInit() {
    this.pobierz();
    this.artykulyService.Zmiany().subscribe(res => {
      console.log(res);
      this.pobierz();
    });
 
  }

  onWyswietlChange() {
    this.wyswietlArtykuly = !this.wyswietlArtykuly;
  }


  pobierz()
{
this.artykulyService.pobierzArtykuly(this.stronnicowanie).subscribe(res=>this.artykuly=res);
}

}
