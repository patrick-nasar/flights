import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcompanyComponent } from './aboutcompany.component';

describe('AboutcompanyComponent', () => {
  let component: AboutcompanyComponent;
  let fixture: ComponentFixture<AboutcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
