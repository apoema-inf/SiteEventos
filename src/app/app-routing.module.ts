import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SobreComponent } from './sobre/sobre.component';
import { ErsigoComponent } from './ersigo/ersigo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProgramacaoComponent } from './cbs/programacao/programacao.component';
import { SessaotecnicaComponent } from './cbs/sessaotecnica/sessaotecnica.component';
import { PalestrantesComponent } from './cbs/palestrantes/palestrantes.component';
import { PalestrantesjgesComponent } from './jges/palestrantesjges/palestrantesjges.component';
import { Palestrantesjges2019Component } from './jges2019/palestrantesjges2019/palestrantesjges2019.component';
import { InfIntineranteComponent } from './inf-intinerante/inf-intinerante.component';
import { JgesComponent } from './jges/jges.component';
import { Jges2019Component } from './jges2019/jges2019.component';
import { DemaisEventosComponent } from './demais-eventos/demais-eventos.component';



const routes: Routes = [
   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
   { path: 'inicio', component: InicioComponent},
   { path: 'sobre', component: SobreComponent},
   { path: 'ersigo', component: ErsigoComponent},
   { path: 'evento/:id', component: EventoDetalheComponent },
   { path: 'programacaocbs', component: ProgramacaoComponent},
   { path: 'sessoes', component: SessaotecnicaComponent},
   { path: 'palestrantes', component: PalestrantesComponent},
   { path: 'palestrantesjges', component: PalestrantesjgesComponent},
   { path: 'palestrantesjges2019', component: Palestrantesjges2019Component},
   { path: 'inf-intinerante', component: InfIntineranteComponent},
   { path: 'programacaojges', component: JgesComponent},
   { path: 'programacaojges2019', component: Jges2019Component},
   { path: 'demais-eventos', component: DemaisEventosComponent}
   
   
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
