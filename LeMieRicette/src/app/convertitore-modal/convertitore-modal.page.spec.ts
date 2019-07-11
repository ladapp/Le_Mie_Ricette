import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertitoreModalPage } from './convertitore-modal.page';

describe('ConvertitoreModalPage', () => {
  let component: ConvertitoreModalPage;
  let fixture: ComponentFixture<ConvertitoreModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertitoreModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertitoreModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
