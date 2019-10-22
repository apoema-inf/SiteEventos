import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Faixajges2019Component } from './faixajges2019.component';

describe('Faixajges2019Component', () => {
  let component: Faixajges2019Component;
  let fixture: ComponentFixture<Faixajges2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Faixajges2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Faixajges2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
