import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixajgesComponent } from './faixajges.component';

describe('FaixajgesComponent', () => {
  let component: FaixajgesComponent;
  let fixture: ComponentFixture<FaixajgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaixajgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaixajgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
