import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaPage } from './cerca.page';

describe('CercaPage', () => {
  let component: CercaPage;
  let fixture: ComponentFixture<CercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
