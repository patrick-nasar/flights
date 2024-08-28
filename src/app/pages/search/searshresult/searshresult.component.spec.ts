import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshresultComponent } from './searshresult.component';

describe('SearshresultComponent', () => {
  let component: SearshresultComponent;
  let fixture: ComponentFixture<SearshresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearshresultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearshresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
