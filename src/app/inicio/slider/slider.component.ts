import { EventoService } from '../eventos/eventos.service';
import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Evento } from '../eventos/evento/Evento.model';
import { TypeScriptEmitter } from '@angular/compiler';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    (<any>$('.slider')).slider();    
    this.eventoService.getEventos();
  }

  eventos: Evento[];

  getEventos(): void{
    this.eventoService.getEventos()
    .subscribe(eventos => this.eventos = eventos);
  }

}
