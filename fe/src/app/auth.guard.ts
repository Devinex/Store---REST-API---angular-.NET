import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoryzacjaService } from './autoryzacja.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private autoryzacjaService: AutoryzacjaService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const czyZalogowany = this.autoryzacjaService.zalogowanyUzytkownik() != null;
    const czyPosiadaUprawniena = czyZalogowany && (route.data?.wymaganaRola == null || route.data.wymaganaRola == this.autoryzacjaService.zalogowanyUzytkownik().rola);
    if (!czyZalogowany || !czyPosiadaUprawniena) {
      this.router.navigateByUrl('logowanie');
    }
    return czyZalogowany && czyPosiadaUprawniena;
  }
}

