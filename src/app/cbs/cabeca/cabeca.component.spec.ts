import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecaComponent } from './cabeca.component';

describe('CabecaComponent', () => {
  let component: CabecaComponent;
  let fixture: ComponentFixture<CabecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
