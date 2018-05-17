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
    EventoComponent
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
