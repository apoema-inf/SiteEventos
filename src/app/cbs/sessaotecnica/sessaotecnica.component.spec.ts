import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaotecnicaComponent } from './sessaotecnica.component';

describe('SessaotecnicaComponent', () => {
  let component: SessaotecnicaComponent;
  let fixture: ComponentFixture<SessaotecnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaotecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaotecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
