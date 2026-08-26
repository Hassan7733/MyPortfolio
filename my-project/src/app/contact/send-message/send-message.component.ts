import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  sendEmail(form: NgForm) {
    // Error prevention: block submit and surface field errors if invalid.
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.status = 'sending';

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
        this.status = 'success';
        this.formData = { name: '', email: '', subject: '', message: '' };
        form.resetForm();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        this.status = 'error';
      });
  }
}
