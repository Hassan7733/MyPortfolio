import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
isOpen = false;
scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isOpen = false;
    }
  }
}
