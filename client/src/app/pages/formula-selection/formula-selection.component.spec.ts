import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaSelectionComponent } from './formula-selection.component';

describe('FormulaSelectionComponent', () => {
  let component: FormulaSelectionComponent;
  let fixture: ComponentFixture<FormulaSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
