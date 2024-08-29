import { Component } from '@angular/core';
import { SearshresultComponent } from "./searshresult/searshresult.component";
import { FormsModule } from '@angular/forms';
import { SerpapiService } from '../../services/serpapi.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearshresultComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  data: any;

  constructor(private searchAPI: SerpapiService) { }

  serachOperation(wherefrom: string, whereto: string, outbound_date: string, return_date: string) {
    this.searchAPI.getData()
  }


  ngOnInit() {
    this.data = this.searchAPI.getData()
    console.log(this.data)
  }



}
