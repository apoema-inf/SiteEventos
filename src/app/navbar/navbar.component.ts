import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ErsigoComponent } from '../ersigo/ersigo.component';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  cbs = false;
  jges = false;
  jges2019 = false;
  ersigo = false;

  constructor(router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.cbs = false;
        this.jges = false;
        this.jges2019 = false;
        this.ersigo = false;
        if (event.url === "/programacaocbs" || event.url === "/sessoes" || event.url === "/evento/cbs" ||
          event.url === "/palestrantes") {
          this.cbs = true;
        } else if (event.url === "/evento/jges" || event.url === "/palestrantesjges"
          || event.url === "/programacaojges") {
          this.jges = true;
        }else if (event.url === "/evento/jges2019" || event.url === "/palestrantesjges2019"
          || event.url === "/programacaojges2019") {
          this.jges2019 = true;
        }
        else if (event.url === "/ersigo") {
          this.ersigo = true;
        }
      }
    });
    
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      window.scrollBy({ 
        top: -40,
        left: 0, 
        behavior: 'smooth' 
      });
    }, 500);
  }


  ngOnInit() {
    $(document).ready(function () {
      $(document).scroll(function () {
        var $nav = $(".linear");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
    
  }

}


