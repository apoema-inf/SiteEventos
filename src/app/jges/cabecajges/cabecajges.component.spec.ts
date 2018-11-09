import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecajgesComponent } from './cabecajges.component';

describe('CabecajgesComponent', () => {
  let component: CabecajgesComponent;
  let fixture: ComponentFixture<CabecajgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecajgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecajgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
