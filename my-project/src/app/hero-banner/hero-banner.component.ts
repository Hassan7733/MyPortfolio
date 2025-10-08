import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {
scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
