import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfIntineranteComponent } from './inf-intinerante.component';

describe('InfIntineranteComponent', () => {
  let component: InfIntineranteComponent;
  let fixture: ComponentFixture<InfIntineranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfIntineranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfIntineranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
