import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightinfoComponent } from './flightinfo.component';

describe('FlightinfoComponent', () => {
  let component: FlightinfoComponent;
  let fixture: ComponentFixture<FlightinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
