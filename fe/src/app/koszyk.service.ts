import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Artykul } from './artykul/artykul.component';
import { AutoryzacjaService } from './autoryzacja.service';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {
  private wybraneArtykuly: BehaviorSubject<Artykul[]> = new BehaviorSubject<Artykul[]>([]);

  constructor(private httpClient: HttpClient, private autoryzacjaService: AutoryzacjaService) {}

  pobierzKoszyk(): Observable<Artykul[]> {
    return this.wybraneArtykuly.asObservable();
  }

  wyczyscKoszyk(): Observable<void>{
    this.httpClient.put<Artykul[]>("https://localhost:5001/api/Koszyk",{},{headers: this.dolaczToken()}).subscribe(res=>this.wybraneArtykuly.next(res));

    return of();
  }
  dodajDoKoszyka(artykul: Artykul): Observable<Artykul[]>{
    this.httpClient.post<Artykul[]>("https://localhost:5001/api/Koszyk",{"id":artykul.id} ,{headers: this.dolaczToken()}).subscribe(res=>this.wybraneArtykuly.next(res), res=>console.log(res));
    return of();
  }
  private dolaczToken(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.autoryzacjaService.zalogowanyUzytkownik()?.token);
  }
}
