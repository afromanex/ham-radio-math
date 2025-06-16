import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaDipoleCaclulatorComponent } from './antenna-dipole-caclulator.component';

describe('AntennaDipoleCaclulatorComponent', () => {
  let component: AntennaDipoleCaclulatorComponent;
  let fixture: ComponentFixture<AntennaDipoleCaclulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntennaDipoleCaclulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntennaDipoleCaclulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
