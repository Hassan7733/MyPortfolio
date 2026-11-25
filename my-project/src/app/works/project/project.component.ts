import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface proj {
  id: number;
  title: string;
  description: string;
  type: string;
  usedTech: any[];
  images: string[];
  links: string[];
  slug?: string;
  caseStudy?: any;
}
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input({ required: true }) project!: proj;
}
