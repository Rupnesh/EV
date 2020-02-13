import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationhistoryPage } from './stationhistory.page';

describe('StationhistoryPage', () => {
  let component: StationhistoryPage;
  let fixture: ComponentFixture<StationhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationhistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
