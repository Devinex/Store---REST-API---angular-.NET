import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artykul } from './artykul/artykul.component';
import { AutoryzacjaService } from './autoryzacja.service';
import { KoszykService } from './koszyk.service';
import { KoszykComponent } from './koszyk/koszyk.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Tworzenie interfejsów użytkownika';

  constructor(private koszyk:KoszykService,private autoryzacjaService: AutoryzacjaService, private router: Router){

  }
  koszyki:Artykul[]=[];
  ngOnInit(){
    this.koszyk.pobierzKoszyk().subscribe(res => this.koszyki = res);
  }
 
  onWyczyscKoszyk(){
    this.koszyk.wyczyscKoszyk();
  }

  czyZalogowany(): boolean {
    return this.autoryzacjaService.zalogowanyUzytkownik() != null;
  }
  
  wyloguj() {
    this.autoryzacjaService.wyloguj();
    this.router.navigateByUrl('logowanie');
  }
}
