import { Injectable } from '@angular/core';
import flights from '../db/flightsdb.json'

@Injectable({
  providedIn: 'root'
})
export class SerpapiService {

  constructor() { }
  db = flights

  getData() {
    return this.db;
  }

}
