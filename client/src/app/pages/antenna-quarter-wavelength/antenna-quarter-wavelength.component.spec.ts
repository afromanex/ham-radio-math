import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaQuarterWavelengthComponent } from './antenna-quarter-wavelength.component';

describe('AntennaQuarterWavelengthComponent', () => {
  let component: AntennaQuarterWavelengthComponent;
  let fixture: ComponentFixture<AntennaQuarterWavelengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntennaQuarterWavelengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntennaQuarterWavelengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
