import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { flightDataType } from '../../../typesfile';

@Component({
  selector: 'app-searshresult',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './searshresult.component.html',
  styleUrl: './searshresult.component.css'
})


export class SearshresultComponent {
  @Input() data: flightDataType[] | null = null;

}
