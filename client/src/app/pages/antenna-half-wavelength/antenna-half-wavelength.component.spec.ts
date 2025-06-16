import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaHalfWavelengthComponent } from './antenna-half-wavelength.component';

describe('AntennaHalfWavelengthComponent', () => {
  let component: AntennaHalfWavelengthComponent;
  let fixture: ComponentFixture<AntennaHalfWavelengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntennaHalfWavelengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntennaHalfWavelengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
