import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoryzacjaService, Login } from '../autoryzacja.service';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {

  login: Login = {
    login: null,
    haslo: null
  };

  blad: string;

  constructor(private autoryzacjaService: AutoryzacjaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.autoryzacjaService.login(this.login).subscribe(res => {
      if(res) {
        this.router.navigateByUrl('');
      } else {
        this.blad = "Błędny login lub hasło!";
      }
    });
  }
}
