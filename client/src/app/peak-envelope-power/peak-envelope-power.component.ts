import { Component, AfterViewInit, NgZone } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare var MathJax: any;

@Component({
  selector: 'app-peak-envelope-power',
  imports: [FormsModule],
  templateUrl: './peak-envelope-power.component.html',
  styleUrl: './peak-envelope-power.component.css'
})
export class PeakEnvelopePowerComponent implements AfterViewInit {
  rmsVoltageFormula: SafeHtml;
  peakVoltageFormula: SafeHtml;
  peakToPeakVoltageFormula: SafeHtml;

  resistance: number | undefined = 50;

  rmsVoltage: number | undefined = undefined;
  rmsVoltageResult: number | undefined = undefined;

  peakVoltage: number | undefined = undefined;
  peakVoltageResult: number | undefined = undefined;

  peakToPeakVoltage: number | undefined = undefined;
  peakToPeakVoltageResult: number | undefined = undefined;

  constructor(private ngZone: NgZone, private sanitizer: DomSanitizer) {
    this.rmsVoltageFormula = this.sanitizer.bypassSecurityTrustHtml(`
          \\[
          \\mathrm{PEP} = \\frac{V_{RMS}^2}{R}
          \\]
        `);

    this.peakVoltageFormula = this.sanitizer.bypassSecurityTrustHtml(`
          \\[
          \\mathrm{PEP} = \\frac{(V_{p}\\cdot 0.707)^2}{R}
          \\]
      `);
    this.peakToPeakVoltageFormula = this.sanitizer.bypassSecurityTrustHtml(`
          \\[
          \\mathrm{PEP} = \\frac{(V_{pp} \\div 2 \\cdot 0.707)^2}{R}
          \\]
      `);
  }

  onSubmit(form: any) {
    // Resistance. 
    if (this.resistance == null) {
      this.rmsVoltageResult = undefined; 
      this.peakVoltageResult = undefined; 
      this.peakToPeakVoltageResult = undefined; 
      return;
    }

    // RMS Voltage.
    if (this.rmsVoltage != null) {
      this.rmsVoltageResult = this.rmsVoltage ** 2 / this.resistance;
    }
    else{
      this.rmsVoltageResult = undefined; 
    }

    // Peak Voltage. 
    if (this.peakVoltage != null) {
      this.peakVoltageResult = ((this.peakVoltage * .707) ** 2) / this.resistance;
    }
    else {
      this.peakVoltageResult = undefined; 
    }

    // Peak to Peak Voltage. 
    if (this.peakToPeakVoltage != null) {
      this.peakToPeakVoltageResult = ((this.peakToPeakVoltage / 2 * .707) ** 2) / this.resistance;
    }
    else {
      this.peakToPeakVoltageResult = undefined; 
    }
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      MathJax?.typeset();
    });
  }
}
