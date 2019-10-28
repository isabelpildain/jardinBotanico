import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViveroPage } from './vivero.page';

describe('ViveroPage', () => {
  let component: ViveroPage;
  let fixture: ComponentFixture<ViveroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViveroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
