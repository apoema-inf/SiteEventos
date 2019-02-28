import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-demais-eventos',
  templateUrl: './demais-eventos.component.html',
  styleUrls: ['./demais-eventos.component.css']
})
export class DemaisEventosComponent implements OnInit {

  constructor(private location: Location) { }

  eventos = [
    {
      titulo: 'Habilitator Tecnológico', 
      descricao: 'Evento destinado ao aprimoramento tecnológico de organizações e ' +
        'empresas do setor produtivo, seja por meio de ações de aconselhamento (coaching)' +
        ', seja por meio de mentorias ágeis, seja por meio de oficinas ou seminários.', 
      publico: '100 pessoas'
    },
    {
      titulo: 'Museu do INF', 
      descricao: 'Mostra de equipamentos, acessórios e diversos dispositivos ' +
        'de hardware e software que fazem parte da história da informática.', 
      publico: '100 pessoas'
    },
    {
      titulo: 'IntegrAção INF', 
      descricao: 'Acolhida e recepção dos estudantes ingressantes nos cursos ' +
      'de Graduação do INF,  com diversas atividades de integração  com os demais ' +
      'estudantes veteranos, professores e comunidade acadêmica.',
      publico: '300 pessoas'
    },
    {
      titulo: 'i9APOEMA', 
      descricao: 'O inovetech APOEMA - i9APOEMA é um espaço de veiculação, demonstração ' +
      'e prototipação para fins de transformação de conhecimentos acadêmico científicos' +
      'em tecnologia e inovação. Tem a finalidade de aproximar os agentes do ecossistema ' +
      'de inovação e empreendedorismo social.', 
      publico: '200 pessoas'
    }
  ]

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
