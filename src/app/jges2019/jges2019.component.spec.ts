import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jges2019Component } from './jges2019.component';

describe('Jges2019Component', () => {
  let component: Jges2019Component;
  let fixture: ComponentFixture<Jges2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jges2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jges2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
