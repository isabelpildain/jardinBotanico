import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionPage } from './investigacion.page';

describe('InvestigacionPage', () => {
  let component: InvestigacionPage;
  let fixture: ComponentFixture<InvestigacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
