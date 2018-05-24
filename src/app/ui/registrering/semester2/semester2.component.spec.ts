import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester2Component } from './semester2.component';

describe('Semester2Component', () => {
  let component: Semester2Component;
  let fixture: ComponentFixture<Semester2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semester2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
