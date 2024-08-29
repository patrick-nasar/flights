import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerpapiService } from '../../services/serpapi.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

interface flighttype {
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
  selector: 'app-flightinfo',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './flightinfo.component.html',
  styleUrl: './flightinfo.component.css'
})

export class FlightinfoComponent {
  id: string | null = ''
  flight: flighttype | null = null
  keys: string[] = []
  values: string[] = []
  show = false


  constructor(private route: ActivatedRoute, private flightAPI: SerpapiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.flight = this.flightAPI.getOneFlight(this.id)[0]
    this.keys = Object.keys(this.flight)
    this.values = Object.values(this.flight)

    console.log(this.keys)
  }
}
