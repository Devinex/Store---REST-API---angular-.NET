import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Artykul } from './artykul/artykul.component';
import { AutoryzacjaService } from './autoryzacja.service';

export interface Stronnicowanie {
  ilosc: number;
  strona: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArtykulyService {
   private aktualizacja: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor(private http: HttpClient, private autoryzacjaService: AutoryzacjaService) { }
  
  Zmiany():Observable<string>{

    return this.aktualizacja.asObservable();
  }
  
  pobierzArtykuly(stronnicowanie: Stronnicowanie): Observable<Artykul[]>
  {
   return this.http.get<Artykul[]>("https://localhost:5001/api/Artykuly",{
   params:{
   strona: stronnicowanie.strona.toString(),
   ilosc:stronnicowanie.ilosc.toString()},
   headers: this.dolaczToken()
  }
   
   );
  }
  getArtykul(id:number): Observable<Artykul>{
    return this.http.get<Artykul>("https://localhost:5001/api/Artykuly/"+id,{ headers: this.dolaczToken() });
  }

  dodaj(artykul: Artykul): Observable<Artykul> {
    return this.http.post<Artykul>("https://localhost:5001/api/Artykuly", artykul ,{ headers: this.dolaczToken() })
    .pipe(tap(
      res => this.aktualizacja.next('Dodano nową osobę!')
    ));
  }

  edytuj(id: number, artykul: Artykul): Observable<Artykul> {
    return this.http.put<Artykul>("https://localhost:5001/api/Artykuly/" + id, artykul,{ headers: this.dolaczToken() })
    .pipe(tap(
      res => this.aktualizacja.next('Zmodyfikowano Artykuł o id = ' + id + '!')
    ));
  }

  private dolaczToken(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.autoryzacjaService.zalogowanyUzytkownik()?.token);
  }
}


