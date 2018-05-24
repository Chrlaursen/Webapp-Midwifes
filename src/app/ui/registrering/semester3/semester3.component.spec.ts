import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester3Component } from './semester3.component';

describe('Semester3Component', () => {
  let component: Semester3Component;
  let fixture: ComponentFixture<Semester3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semester3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
