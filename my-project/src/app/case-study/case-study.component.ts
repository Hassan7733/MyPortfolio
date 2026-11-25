import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SupabaseService } from '../supabase.service';

interface ProcessStep {
  phase: string;
  body: string;
  images?: string[];
}
interface Screen {
  image: string;
  caption?: string;
}
interface Decision {
  title: string;
  body: string;
}
interface CaseStudy {
  tagline?: string;
  role?: string;
  timeline?: string;
  client?: string;
  tools?: string[];
  heroImage?: string;
  overview?: string;
  problem?: string;
  objective?: string;
  users?: string;
  process?: ProcessStep[];
  screens?: Screen[];
  decisions?: Decision[];
  outcome?: string;
  reflection?: string;
}
interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  usedTech: any[];
  images: string[];
  links: string[];
  slug: string;
  caseStudy: CaseStudy | null;
}

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css',
})
export class CaseStudyComponent implements OnInit, OnDestroy {
  project: Project | null = null;
  cs: CaseStudy | null = null;
  loading = true;
  notFound = false;
  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(async (params) => {
      const slug = params.get('slug');
      this.loading = true;
      this.notFound = false;
      this.project = null;
      this.cs = null;
      window.scrollTo({ top: 0 });

      if (!slug) {
        this.notFound = true;
        this.loading = false;
        return;
      }

      const data = await this.supabase.getProjectBySlug(slug);
      if (!data || !data.caseStudy) {
        this.notFound = true;
        this.loading = false;
        return;
      }

      this.project = data as Project;
      this.cs = data.caseStudy as CaseStudy;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
