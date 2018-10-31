import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sessaotecnica',
  templateUrl: './sessaotecnica.component.html',
  styleUrls: ['./sessaotecnica.component.css']
})
export class SessaotecnicaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.tabs').tabs();
      $('.collapsible').collapsible();
    });
  }

}
