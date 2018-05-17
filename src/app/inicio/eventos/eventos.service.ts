import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

import { EVENTOS } from './../../Eventos';
import { Evento } from './evento/Evento.model';

@Injectable()
export class EventoService {

  constructor() { }

  getEventos(): Observable<Evento[]>{
    return of(EVENTOS);
  }

  getEvento(id: string): Observable<Evento>{
    return of(EVENTOS.find(evento => evento.id === id));
  }
}
