import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-external-links',
  standalone: true,
  imports: [],
  templateUrl: './external-links.component.html',
  styleUrl: './external-links.component.css'
})
export class ExternalLinksComponent {
@Input({required:true}) Github!:boolean;  
}
