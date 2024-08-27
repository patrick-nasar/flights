import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  underLine = "relative px-1 after:h-[2px] after:w-full after:bg-white after:absolute after:left-0 after:bottom-[-0.7rem] after:scale-x-0 after:hover:scale-x-105 after:transition after:duration-500"

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
