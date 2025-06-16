import { Component, AfterViewInit, NgZone } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

declare var MathJax: any;

@Component({
  selector: 'app-antenna-dipole-caclulator',
  imports: [ FormsModule ],
  templateUrl: './antenna-dipole-caclulator.component.html',
  styleUrl: './antenna-dipole-caclulator.component.css'
})
export class AntennaDipoleCaclulatorComponent  implements AfterViewInit {
  halfWavelengthformula: SafeHtml;
  quarterWavelengthformula: SafeHtml;
  result: any; 
  frequency = 14.250; 
  wavelengthMultiplier = 1; 

  constructor(private ngZone: NgZone, private sanitizer: DomSanitizer) 
  { 
    this.halfWavelengthformula = this.sanitizer.bypassSecurityTrustHtml(`
      \\[
      \\text{Length (in feet)} = \\frac{468}{\\text{Frequency (in MHz)}}
      \\]
    `);
    this.quarterWavelengthformula = this.sanitizer.bypassSecurityTrustHtml(`
      \\[
      \\text{Length (in feet)} = \\frac{234}{\\text{Frequency (in MHz)}}
      \\]
    `);
    this.result = 'Enter frequency to calculate result'
  }

  onSetFrequency(frequency: any){
    this.frequency = frequency; 
  }

  ngAfterViewInit()
  {
    this.ngZone.runOutsideAngular(() => {
      MathJax?.typeset();
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const length = 468 / this.frequency * this.wavelengthMultiplier;
      this.result = `Length (in feeet) &approx; ${length.toFixed(3)} feet`;
    } 
    else {
      console.log('Form invalid');
    }
  }
}