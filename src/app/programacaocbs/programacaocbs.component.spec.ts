import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaocbsComponent } from './programacaocbs.component';

describe('ProgramacaocbsComponent', () => {
  let component: ProgramacaocbsComponent;
  let fixture: ComponentFixture<ProgramacaocbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacaocbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacaocbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
