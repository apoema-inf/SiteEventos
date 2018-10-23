import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cbs = false;

  constructor(router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.cbs = false;
        if (event.url === "/programacaocbs" || event.url === "/sessoes" || event.url === "/evento/cbs" ||
          event.url === "/palestrantes") {
          this.cbs = true;
        }
      }
    });
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


