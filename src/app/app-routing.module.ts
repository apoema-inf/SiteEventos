import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
   { path: 'inicio', component: InicioComponent},
   { path: 'sobre', component: SobreComponent},
   { path: 'evento/:id', component: EventoDetalheComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
