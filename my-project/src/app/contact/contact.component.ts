import { Component } from '@angular/core';
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { SendMessageComponent } from "./send-message/send-message.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactInfoComponent, SendMessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
