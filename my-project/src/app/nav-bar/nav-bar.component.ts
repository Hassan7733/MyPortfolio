import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isDark = false;
  activeSection = 'home';
  private observer?: IntersectionObserver;

  ngOnInit() {
    // Sync toggle state with the class set by the pre-paint script in index.html.
    this.isDark = document.documentElement.classList.contains('dark');

    const ids = ['home', 'about', 'works', 'contact'];
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    // Defer so the section elements are in the DOM before we observe them.
    setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) this.observer!.observe(el);
      });
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    const root = document.documentElement;
    root.classList.toggle('dark', this.isDark);
    try {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    } catch {
      /* storage unavailable — ignore */
    }
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isOpen = false;
    }
  }
}
