import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-power',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './power.component.html',
  styleUrl: './power.component.css'
})
export class PowerComponent {
  e: number | undefined; 
  eResult: number | undefined; 
  r: number | undefined; 
  rResult: number | undefined; 
  i: number | undefined; 
  iResult: number | undefined; 
  p: number | undefined; 
  pResult: number | undefined; 
  moreThan2Fields: boolean = false; 

  formula: any; 

  ohmsLaw(e: number, i: number): number {
    return e / i; 
  }

  powerFromVoltsAndCurrent(e: number, i: number): number{ 
    return e * i; 
  }

  powerFromVoltsAndResistance(e: number, r: number): number {
    return e ** 2 / r; 
  }

  powerFromCurrentAndResistance(i: number, r: number): number {
    return i ** 2 * r; 
  }

  voltsFromPowerAndResistance(p: number, r: number): number {
    return Math.sqrt(p * r); 
  }

  voltsFromPowerAndCurrent(p: number, i: number): number {
    return p / i; 
  }

  currentFromPowerAndVolts(p: number, e: number): number {
    return p / e; 
  }

  resistanceFromPowerAndCurrent(p: number, i: number): number {
    return p / i ** 2; 
  }

  onReset(){
    this.p = undefined; 
    this.i = undefined; 
    this.e = undefined; 
    this.r = undefined; 

    this.pResult = undefined; 
    this.iResult = undefined; 
    this.eResult = undefined; 
    this.rResult = undefined; 

    this.moreThan2Fields = false; 
  }

  onSubmit(form: NgForm){
    let sum = 0; 
    if(this.p != null) sum++; 
    if(this.i != null) sum++; 
    if(this.e != null) sum++; 
    if(this.r != null) sum++; 
    if(sum != 2){
      this.moreThan2Fields = true; 
      this.pResult = undefined; 
      this.iResult = undefined; 
      this.eResult = undefined; 
      this.rResult = undefined; 
    }
    else{
      this.moreThan2Fields = false; 
      this.calculateAll(); 
    }
  }

  private calculateAll(){
    // Volts and Current; 
    if(this.e != null && this.i != null){
      this.eResult = this.e; 
      this.iResult = this.i; 
      this.rResult = this.ohmsLaw(this.e, this.i); 
      this.pResult = this.powerFromCurrentAndResistance(this.i, this.rResult); 
      return; 
    }

    // Volts and Resistance. 
    if(this.e != null && this.r != null){
      this.eResult = this.e; 
      this.rResult = this.r; 
      this.pResult = this.powerFromVoltsAndResistance(this.e, this.r); 
      this.iResult = this.currentFromPowerAndVolts(this.pResult, this.e); 
    }

    // Volts and Power. 
    if(this.e != null && this.p != null){
      this.eResult = this.e; 
      this.pResult = this.p; 
      this.iResult = this.currentFromPowerAndVolts(this.p, this.e); 
      this.rResult = this.resistanceFromPowerAndCurrent(this.p, this.iResult); 
    }

    // Resistance and Current. 
    if(this.r != null && this.i != null){
      this.iResult = this.i; 
      this.rResult = this.r; 
      this.pResult = this.powerFromCurrentAndResistance(this.i, this.r); 
      this.eResult = this.voltsFromPowerAndResistance(this.pResult, this.r); 
    }

    // Resistance and power. 
    if(this.r != null && this.p != null){
      this.pResult = this.p; 
      this.rResult = this.r; 
      this.eResult = this.voltsFromPowerAndResistance(this.p, this.r); 
      this.iResult = this.currentFromPowerAndVolts(this.p, this.eResult); 
    }

    // Current and power. 
    if(this.i != null && this.p != null){
      this.iResult = this.i; 
      this.pResult = this.p; 
      this.eResult = this.voltsFromPowerAndCurrent(this.p, this.i);
      this.rResult = this.resistanceFromPowerAndCurrent(this.p, this.i); 
    }
  }
}
