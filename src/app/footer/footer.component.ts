import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  patrocinadores = [];

  constructor(router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.patrocinadores = [];
        if (event.url === "/programacaocbs" || event.url === "/sessoes" || event.url === "/evento/cbs" ||
          event.url === "/palestrantes") {
          this.patrocinadores.push({ nome: 'FASAM', link: 'http://fasam.edu.br' });
        }
      }
    });
  }

  ngOnInit() {
  }

}
