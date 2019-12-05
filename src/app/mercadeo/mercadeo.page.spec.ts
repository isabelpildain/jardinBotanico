import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadeoPage } from './mercadeo.page';

describe('MercadeoPage', () => {
  let component: MercadeoPage;
  let fixture: ComponentFixture<MercadeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
