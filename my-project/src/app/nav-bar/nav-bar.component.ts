import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isDark = false;
  activeSection = 'home';
  private observer?: IntersectionObserver;
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    // Sync toggle state with the class set by the pre-paint script in index.html.
    this.isDark = document.documentElement.classList.contains('dark');

    if (this.onHome()) {
      this.setupObserver();
    }

    // Re-arm the section observer whenever we land back on the home route,
    // since the observed elements only exist there.
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.onHome()) {
          this.activeSection = 'home';
          this.setupObserver();
        } else {
          this.observer?.disconnect();
        }
      });
  }

  private onHome(): boolean {
    const u = this.router.url;
    return u === '/' || u.startsWith('/#') || u.startsWith('/?');
  }

  private setupObserver() {
    this.observer?.disconnect();
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
    this.routerSub?.unsubscribe();
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
    this.activeSection = sectionId;
    this.isOpen = false;
    if (this.onHome()) {
      this.doScroll(sectionId);
    } else {
      // Navigate home first, then scroll once the sections are rendered.
      this.router.navigate(['/']).then(() => setTimeout(() => this.doScroll(sectionId), 120));
    }
  }

  private doScroll(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
