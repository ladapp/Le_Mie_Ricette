import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiRicettaPage } from './aggiungi-ricetta.page';

describe('AggiungiRicettaPage', () => {
  let component: AggiungiRicettaPage;
  let fixture: ComponentFixture<AggiungiRicettaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiRicettaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiRicettaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
