import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasViewPage } from './plantas-view.page';

describe('PlantasViewPage', () => {
  let component: PlantasViewPage;
  let fixture: ComponentFixture<PlantasViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
