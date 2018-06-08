import { EventoService } from '../eventos/eventos.service';
import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Evento } from '../eventos/evento/Evento.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventoService.getEventos();
    (<any>$('.slider')).slider();
  }

  eventos: Evento[];

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  getEventos(): void{
    this.eventoService.getEventos()
    .subscribe(eventos => this.eventos = eventos);
  }

}
