import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasHorariosPage } from './tarifas-horarios.page';

describe('TarifasHorariosPage', () => {
  let component: TarifasHorariosPage;
  let fixture: ComponentFixture<TarifasHorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifasHorariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifasHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
