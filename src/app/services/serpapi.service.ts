import { Injectable } from '@angular/core';
import flights from '../db/flightsdb.json'

@Injectable({
  providedIn: 'root'
})
export class SerpapiService {

  constructor() { }
  flights = flights

  getData() {
    return this.flights;
  }

  getOneFlight(id: string | null) {
    return this.flights.flights.filter(flightid => flightid.id === parseInt(id || ''));
  }



}
