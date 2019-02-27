import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemaisEventosComponent } from './demais-eventos.component';

describe('DemaisEventosComponent', () => {
  let component: DemaisEventosComponent;
  let fixture: ComponentFixture<DemaisEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemaisEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemaisEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
