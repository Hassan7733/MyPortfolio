import { Component } from '@angular/core';
import { SupabaseService } from '../../supabase.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
Experiences: any[] = [];
constructor(private supabaseService: SupabaseService) {}
async ngOnInit() {
    this.Experiences = await this.supabaseService.getExperiences();
    console.log(this.Experiences);
  }
}
