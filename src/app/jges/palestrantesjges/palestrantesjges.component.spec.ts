import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestrantesjgesComponent } from './palestrantesjges.component';

describe('PalestrantesjgesComponent', () => {
  let component: PalestrantesjgesComponent;
  let fixture: ComponentFixture<PalestrantesjgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestrantesjgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestrantesjgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
