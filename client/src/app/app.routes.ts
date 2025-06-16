import { Routes } from '@angular/router';
import { AntennaHalfWavelengthComponent } from './pages/antenna-half-wavelength/antenna-half-wavelength.component';
import { AntennaQuarterWavelengthComponent } from './pages/antenna-quarter-wavelength/antenna-quarter-wavelength.component';
import { FormulaSelectionComponent } from './pages/formula-selection/formula-selection.component';

export const routes: Routes = [
    { path: '', component: FormulaSelectionComponent }, 
    { path: 'antenna-half-wavelength', component: AntennaHalfWavelengthComponent }, 
    { path: 'antenna-quarter-wavelength', component: AntennaQuarterWavelengthComponent }
    
];
