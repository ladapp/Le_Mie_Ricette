import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteDalMioFrigoPage } from './ricette-dal-mio-frigo.page';

describe('RicetteDalMioFrigoPage', () => {
  let component: RicetteDalMioFrigoPage;
  let fixture: ComponentFixture<RicetteDalMioFrigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicetteDalMioFrigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicetteDalMioFrigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
