import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../supabase.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
designSkills: any[] = [];
technicalSkills: any[] = [];
constructor(private supabaseService: SupabaseService) {}
async ngOnInit() {
    this.designSkills = await this.supabaseService.getDesignSkills();
    console.log(this.designSkills);
    this.technicalSkills = await this.supabaseService.getTechnicalsSkills();
    console.log(this.technicalSkills);
    
  }
}
