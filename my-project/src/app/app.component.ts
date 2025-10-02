import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ExternalLinksComponent } from "./external-links/external-links.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeroBannerComponent, AboutMeComponent, ExternalLinksComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
