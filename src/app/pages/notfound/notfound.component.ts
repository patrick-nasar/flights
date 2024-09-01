import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-notfound',
  standalone: true,
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
