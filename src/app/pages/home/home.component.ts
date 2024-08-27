import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FeaturesComponent } from "./features/features.component";
import { AboutcompanyComponent } from "./aboutcompany/aboutcompany.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, FeaturesComponent, AboutcompanyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
