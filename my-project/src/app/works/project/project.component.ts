import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface proj {
    title: string;
    description: string;
    type: string;
    usedTech: [];
    images: [];
    links: [];
}
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input({ required: true }) project!: proj;
}
