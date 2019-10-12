import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ersigo',
  templateUrl: './ersigo.component.html',
  styleUrls: ['./ersigo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErsigoComponent implements OnInit {

  constructor() { }
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
    
  }

}
