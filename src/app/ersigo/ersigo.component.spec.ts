import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsigoComponent } from './ersigo.component';

describe('ErsigoComponent', () => {
  let component: ErsigoComponent;
  let fixture: ComponentFixture<ErsigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErsigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
