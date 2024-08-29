import { Injectable } from '@angular/core';
import flights from '../db/flightsdb.json'

@Injectable({
  providedIn: 'root'
})
export class SerpapiService {

  constructor() { }

  getData() {
    return flights;
  }

  getOneFlight(id: string | null) {
    return flights.flights.filter(flightid => flightid.id === parseInt(id || ''));
  }

  getSearchedFlight(wherefrom: string, whereto: string, outbound_date: string, return_date: string) {

    for (let i = 0; i < flights.flights.length; i++) {
      if (wherefrom === flights.flights[i].origin
        && whereto === flights.flights[i].destination
        && outbound_date === flights.flights[i].departureTime
        && return_date ===  flights.flights[i].arrivalTime) {
        return [flights.flights[i]]
      }
    }
    return flights.flights
  }

}
