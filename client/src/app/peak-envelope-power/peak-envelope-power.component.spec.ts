import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakEnvelopePowerComponent } from './peak-envelope-power.component';

describe('PeakEnvelopePowerComponent', () => {
  let component: PeakEnvelopePowerComponent;
  let fixture: ComponentFixture<PeakEnvelopePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeakEnvelopePowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeakEnvelopePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
