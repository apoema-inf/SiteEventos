import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  patrocinadores = [];
  jges2019 = false;
  constructor(router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.jges2019 = false;
        this.patrocinadores = [];
        if (event.url === "/programacaocbs" || event.url === "/sessoes" || event.url === "/evento/cbs" ||
          event.url === "/palestrantes") {
          this.patrocinadores.push({ nome: 'FASAM', link: 'http://fasam.edu.br' });
        }
        else if (event.url === "/evento/jges2019" || event.url === "/palestrantesjges2019"
          || event.url === "/programacaojges2019") {
          this.jges2019 = true;
        }
      }
    });
  }

  ngOnInit() {
  }

}
