import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface datatype {
  airline: string,
  arrivalTime: string,
  baggageAllowance: string,
  departureTime: string,
  destination: string,
  duration: string,
  flightNumber: string,
  id: number,
  origin: string,
  price: number
}

@Component({
  selector: 'app-searshresult',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule,RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './searshresult.component.html',
  styleUrl: './searshresult.component.css'
})


export class SearshresultComponent {
  @Input() data: datatype[] = [];

  clickb() {
    console.log(this.data)
  }

}
