import { EventoService } from './inicio/eventos/eventos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './inicio/slider/slider.component';
import { EventosComponent } from './inicio/eventos/eventos.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { EventoComponent } from './inicio/eventos/evento/evento.component';
import * as $ from "jquery";
import { CbsComponent } from './cbs/cbs.component';
import { CabecaComponent } from './cbs/cabeca/cabeca.component';
import { FaixaComponent } from './cbs/faixa/faixa.component';
import { ProgramacaoComponent } from './cbs/programacao/programacao.component';
import { PalestrantesComponent } from './cbs/palestrantes/palestrantes.component';
import { SessaotecnicaComponent } from './cbs/sessaotecnica/sessaotecnica.component';
import { JgesComponent } from './jges/jges.component';
import { PalestrantesjgesComponent } from './jges/palestrantesjges/palestrantesjges.component';
import { CabecajgesComponent } from './jges/cabecajges/cabecajges.component';
import { FaixajgesComponent } from './jges/faixajges/faixajges.component';
import { InfIntineranteComponent } from './inf-intinerante/inf-intinerante.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    EventosComponent,
    EventoDetalheComponent,
    EventoComponent,
    CbsComponent,
    CabecaComponent,
    FaixaComponent,
    ProgramacaoComponent,
    SessaotecnicaComponent,
    PalestrantesComponent,
    JgesComponent,
    PalestrantesjgesComponent,
    CabecajgesComponent,
    FaixajgesComponent,
    InfIntineranteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
