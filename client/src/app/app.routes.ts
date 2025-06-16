import { Routes } from '@angular/router';
import { FormulaSelectionComponent } from './pages/formula-selection/formula-selection.component';
import { AntennaDipoleCaclulatorComponent } from './pages/antenna-dipole-caclulator/antenna-dipole-caclulator.component';
import { PeakEnvelopePowerComponent } from './peak-envelope-power/peak-envelope-power.component';

export const routes: Routes = [
    { path: '', component: FormulaSelectionComponent }, 
    { path: 'antenna-dipole-calculator', component: AntennaDipoleCaclulatorComponent },
    { path: 'peak-envelope-power', component: PeakEnvelopePowerComponent }
];
