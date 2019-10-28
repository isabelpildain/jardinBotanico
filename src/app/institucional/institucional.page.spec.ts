import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionalPage } from './institucional.page';

describe('InstitucionalPage', () => {
  let component: InstitucionalPage;
  let fixture: ComponentFixture<InstitucionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
