import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
projects: any[] = [];
constructor(private supabaseService: SupabaseService) {}
async ngOnInit() {
    this.projects = await this.supabaseService.getProjects();
    console.log(this.projects);
  }
}
