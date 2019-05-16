import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeMieRicettePage } from './le-mie-ricette.page';

describe('LeMieRicettePage', () => {
  let component: LeMieRicettePage;
  let fixture: ComponentFixture<LeMieRicettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeMieRicettePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeMieRicettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
