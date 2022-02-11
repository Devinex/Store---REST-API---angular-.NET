import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtykulComponent } from './artykul/artykul.component';
import { ArtykulyService } from './artykuly.service';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { AuthGuard } from './auth.guard';
import { FormularzComponent } from './formularz/formularz.component';
import { KoszykService } from './koszyk.service';
import { KoszykComponent } from './koszyk/koszyk.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

 { path: '',component:MenuComponent,canActivate: [AuthGuard]},
 { path: 'logowanie', component: LogowanieComponent },
 {
   path: 'artykuly',children:[
 {path: '',component:ArtykulyComponent, canActivate: [AuthGuard]},
 {path: 'nowy',component:FormularzComponent, canActivate: [AuthGuard],data: { wymaganaRola: "Admin" }},
 {path: ':id',component:ArtykulComponent, canActivate: [AuthGuard]},
 {path: ':id/edytuj',component:FormularzComponent, canActivate: [AuthGuard],data: { wymaganaRola: "Admin" }}
]
},
{path:'koszyk',component:KoszykComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
