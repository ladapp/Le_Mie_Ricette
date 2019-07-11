import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolatriceModalPage } from './calcolatrice-modal.page';

describe('CalcolatriceModalPage', () => {
  let component: CalcolatriceModalPage;
  let fixture: ComponentFixture<CalcolatriceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcolatriceModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcolatriceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
