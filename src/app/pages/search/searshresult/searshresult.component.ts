import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

interface datatype {
  airline: string,
  arrivalTime: string,
  baggageAllowance: { checked: 2, carryOn: 1 },
  departureTime: string,
  destination: string,
  duration: string,
  flightNumber: string,
  id: number,
  origin: string,
  price: string
}

@Component({
  selector: 'app-searshresult',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule,],
  templateUrl: './searshresult.component.html',
  styleUrl: './searshresult.component.css'
})


export class SearshresultComponent {
  @Input() data: datatype[] = [];

  clickb() {
    console.log(this.data)
  }

}
