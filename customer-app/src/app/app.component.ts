import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  feedback = {
    email: '',
    message: '',
    mood: ''
  };

  constructor(private http: HttpClient) { }

  submitFeedback() {
    console.log('Feedback submitted successfully!');
    // Assuming your backend endpoint is at '/api/feedback'
    // this.http.post('/api/feedback', this.feedback)
    //   .subscribe(
    //     response => {
    //       console.log('Feedback submitted successfully!', response);
    //       //reset form
    //       //this.feedback = { name: '', email: '', phone: '', rating: 5, message: '' };
    //     },
    //     error => {
    //       console.error('Error submitting feedback:', error);
    //     }
    //   );
  }
}
