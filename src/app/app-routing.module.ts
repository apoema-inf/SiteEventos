import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProgramacaoComponent } from './cbs/programacao/programacao.component';
import { SessaotecnicaComponent } from './cbs/sessaotecnica/sessaotecnica.component';
import { PalestrantesComponent } from './cbs/palestrantes/palestrantes.component';
import { PalestrantesjgesComponent } from './jges/palestrantesjges/palestrantesjges.component';
import { InfIntineranteComponent } from './inf-intinerante/inf-intinerante.component';
import { JgesComponent } from './jges/jges.component';


const routes: Routes = [
   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
   { path: 'inicio', component: InicioComponent},
   { path: 'sobre', component: SobreComponent},
   { path: 'evento/:id', component: EventoDetalheComponent },
   { path: 'programacaocbs', component: ProgramacaoComponent},
   { path: 'sessoes', component: SessaotecnicaComponent},
   { path: 'palestrantes', component: PalestrantesComponent},
   { path: 'palestrantesjges', component: PalestrantesjgesComponent},
   { path: 'inf-intinerante', component: InfIntineranteComponent},
   { path: 'programacaojges', component: JgesComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
