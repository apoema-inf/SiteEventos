import { Evento } from './evento/Evento.model';
import { EventoService } from './eventos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  eventos: Evento[];
  getEventos(): void{
    this.eventoService.getEventos()
    .subscribe(eventos => this.eventos = eventos);
  }

}
