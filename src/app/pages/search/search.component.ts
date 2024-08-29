import { Component } from '@angular/core';
import { SearshresultComponent } from "./searshresult/searshresult.component";
import { FormsModule } from '@angular/forms';
import { SerpapiService } from '../../services/serpapi.service';
import { flightDataType } from '../../typesfile';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearshresultComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  data: flightDataType[] | null = null;

  constructor(private API: SerpapiService) { }

  serachOperation(wherefrom: string, whereto: string, outbound_date: string, return_date: string) {
   this.data = this.API.getSearchedFlight(wherefrom, whereto, outbound_date, return_date)
  }


  ngOnInit() {
    this.data = this.API.getData().flights
    console.log(this.data)
  }

}
