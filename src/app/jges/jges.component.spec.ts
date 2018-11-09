import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JgesComponent } from './jges.component';

describe('JgesComponent', () => {
  let component: JgesComponent;
  let fixture: ComponentFixture<JgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
