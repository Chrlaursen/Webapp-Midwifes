import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester4Component } from './semester4.component';

describe('Semester4Component', () => {
  let component: Semester4Component;
  let fixture: ComponentFixture<Semester4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semester4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
