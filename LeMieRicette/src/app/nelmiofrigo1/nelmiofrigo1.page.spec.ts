import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nelmiofrigo1Page } from './nelmiofrigo1.page';

describe('Nelmiofrigo1Page', () => {
  let component: Nelmiofrigo1Page;
  let fixture: ComponentFixture<Nelmiofrigo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nelmiofrigo1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nelmiofrigo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
