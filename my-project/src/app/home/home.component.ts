import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExternalLinksComponent } from '../external-links/external-links.component';
import { ContactComponent } from '../contact/contact.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    AboutMeComponent,
    ExternalLinksComponent,
    ContactComponent,
    WorksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
