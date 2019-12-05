import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilviculturaPage } from './silvicultura.page';

describe('SilviculturaPage', () => {
  let component: SilviculturaPage;
  let fixture: ComponentFixture<SilviculturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilviculturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilviculturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
