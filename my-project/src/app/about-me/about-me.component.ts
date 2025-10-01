import { Component } from '@angular/core';
import { BioComponent } from "./bio/bio.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperiencesComponent } from "./experiences/experiences.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [BioComponent, SkillsComponent, ExperiencesComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
