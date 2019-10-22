import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Palestrantesjges2019Component } from './palestrantesjges2019.component';

describe('Palestrantesjges2019Component', () => {
  let component: Palestrantesjges2019Component;
  let fixture: ComponentFixture<Palestrantesjges2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Palestrantesjges2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Palestrantesjges2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
