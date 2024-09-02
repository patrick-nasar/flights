import { TestBed } from '@angular/core/testing';
import { SerpapiService } from './serpapi.service';
import { flightDataType } from '../typesfile';
import flights from '../db/flightsdb.json'

describe('SerpapiService', () => {
  let service: SerpapiService;
  let allFlights: flightDataType[] = flights.flights;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerpapiService]
    });
    service = TestBed.inject(SerpapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should get all flights', () => {
      expect(service.getData().flights).toEqual(allFlights);
    })
  })

  describe('getOneFlight', () => {
    it('should get one flight', () => {
      expect(flights.flights.filter((Flight) => Flight.id === 2)[0]).toEqual(allFlights[1]);
    })
  })

  describe('getSearchedFlight', () => {
    let result: flightDataType[]

    it('should get searched flight', () => {
      for (let i = 0; i < flights.flights.length; i++) {
        if ('JFK' === flights.flights[i].origin
          && 'LAX' === flights.flights[i].destination
          && '2024-09-01' === flights.flights[i].departureTime
          && '2024-09-01' === flights.flights[i].arrivalTime) {
          result = [flights.flights[i]]
        }
      }
      expect(result).toEqual([{
        "id": 1,
        "airline": "American Airlines",
        "flightNumber": "AA123",
        "origin": "JFK",
        "destination": "LAX",
        "departureTime": "2024-09-01",
        "arrivalTime": "2024-09-01",
        "price": 350.00,
        "duration": "3 hours",
        "baggageAllowance": "Big baggage"
      }]);
    })
  })

});
