import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artykul } from '../artykul/artykul.component';
import { ArtykulyService } from '../artykuly.service';



@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {

form: FormGroup;
  private id: number;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private artykulyService: ArtykulyService, private router: Router) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if(id >= 0) {
      this.id = id;
      this.artykulyService.getArtykul(id).subscribe(res => this.utworzFormularz(res));
    } else {

      this.utworzFormularz(null);
    
    }
  }

  private utworzFormularz(artykul?: Artykul) {
    this.form = this.fb.group({
      nazwa: new FormControl(artykul?.nazwa, [ Validators.required, Validators.maxLength(100), Validators.minLength(2) ]),
      opis: new FormControl(artykul?.opis,[Validators.maxLength(300)]),
      cena: new FormControl(artykul?.cena, [ Validators.required, Validators.min(0), Validators.max(1000) ]),
      src:new FormControl(artykul?.src)
    });


  }

  onSubmit(event) {
    if(this.id > 0) {
      this.artykulyService.edytuj(this.id, this.form.value).subscribe(res => this.router.navigateByUrl('artykuly'));
    } else {
      this.artykulyService.dodaj(this.form.value).subscribe(res => this.router.navigateByUrl('artykuly'));
    }
  }

}
