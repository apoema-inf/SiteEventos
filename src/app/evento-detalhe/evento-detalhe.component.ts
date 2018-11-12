import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;

import { EventoService } from './../inicio/eventos/eventos.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css',]
})
export class EventoDetalheComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private location: Location,
    private eventoService: EventoService) {

  }

  image = [
    {url: 'assets/images/cbs/galeria/img2.jpg'},
    {url: 'assets/images/cbs/galeria/img13.jpeg'},
    {url: 'assets/images/cbs/galeria/img3.jpg'},
    {url: 'assets/images/cbs/galeria/img6.jpeg'},
    {url: 'assets/images/cbs/galeria/img8.jpeg'},
    {url: 'assets/images/cbs/galeria/img1.jpeg'},
    {url: 'assets/images/cbs/galeria/img7.jpg'},
    {url: 'assets/images/cbs/galeria/img5.jpg'},
    {url: 'assets/images/cbs/galeria/img9.jpeg'},
    {url: 'assets/images/cbs/galeria/img10.jpeg'},
    {url: 'assets/images/cbs/galeria/img11.jpeg'},
    {url: 'assets/images/cbs/galeria/img12.jpeg'},
    {url: 'assets/images/cbs/galeria/img4.jpeg'}
  ];

  evento;

  ngOnInit() {
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
    this.getEvento();
    document.getElementById("sinopse").innerHTML = this.evento.sinopse;
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
