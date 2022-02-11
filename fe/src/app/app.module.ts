import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtykulComponent } from './artykul/artykul.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { MenuComponent } from './menu/menu.component';
import { FormularzComponent } from './formularz/formularz.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { NiebieskiTekstDirective } from './niebieski-tekst.directive';
import { CzerwonyTekstDirective } from './czerwony-tekst.directive';
import { ZoltyTekstDirective } from './zolty-tekst.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ArtykulComponent,
    KoszykComponent,
    ArtykulyComponent,
    MenuComponent,
    FormularzComponent,
    LogowanieComponent,
    NiebieskiTekstDirective,
    CzerwonyTekstDirective,
    ZoltyTekstDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
