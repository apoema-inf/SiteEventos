import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecajges2019Component } from './cabecajges2019.component';

describe('Cabecajges2019Component', () => {
  let component: Cabecajges2019Component;
  let fixture: ComponentFixture<Cabecajges2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cabecajges2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cabecajges2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
