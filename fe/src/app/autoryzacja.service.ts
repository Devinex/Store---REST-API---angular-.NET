import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Login {
  login: string;
  haslo: string;
}

export interface LoginRes {
  token: string;
  rola: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutoryzacjaService {

  zmianaStatusuUzytkownika: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  zalogowanyUzytkownik(): LoginRes {
    let login = JSON.parse(sessionStorage.getItem('uzytkownik')) as LoginRes;
    if(login != null && this.tokenExpired(login.token)) {
      this.wyloguj();
      login = null;
    }
    return login;
  }

  private tokenExpired(token: string): boolean {
    token.split('.').forEach(c => {
      try {
        console.log(atob(c));
      } catch {
        console.log('Oryginał: ', c);
      }
    });
    const dataWaznosci = JSON.parse(atob(token.split('.')[1])).exp;
    const aktualnyCzas = (Math.floor((new Date).getTime() / 1000));
    return aktualnyCzas >= dataWaznosci;
  }

  login(login: Login): Observable<boolean> {
    return this.http.post<LoginRes>("https://localhost:5001/api/Logowanie", login).pipe(map(res => {
      sessionStorage.setItem('uzytkownik', JSON.stringify(res));
      this.zmianaStatusuUzytkownika.emit();
      return true;
    }), catchError(error => {
      return of(false);
    }));
  }

  wyloguj() {
    sessionStorage.removeItem('uzytkownik');
    this.zmianaStatusuUzytkownika.emit();
  }
}
