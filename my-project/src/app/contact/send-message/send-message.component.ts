import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent {
formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail() {

    emailjs.send(
      'service_6qzn9eh',
      'template_uw9de5x',
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
      },
      's9VyFoEeQxGEaLmcI'
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      this.formData = { name: '', email: '', subject: '', message: '' }; // clear form
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('❌ Failed to send message. Please try again.');
    });
  }
}

