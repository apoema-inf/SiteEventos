import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventoService } from './../inicio/eventos/eventos.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css',]
})
export class EventoDetalheComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventoService: EventoService,
  ){ }

  evento;

  ngOnInit() {
    this.getEvento();
  }

  getEvento(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.eventoService.getEvento(id)
      .subscribe(evento => this.evento = evento);
  }
  goBack(): void {
    this.location.back();
  }
}
