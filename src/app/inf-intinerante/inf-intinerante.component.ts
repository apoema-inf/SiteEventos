import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inf-intinerante',
  templateUrl: './inf-intinerante.component.html',
  styleUrls: ['./inf-intinerante.component.css']
})
export class InfIntineranteComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    (<any>$('.slider')).slider({interval:2000});
  }

  goBack(): void {
    this.location.back();
  }

}
