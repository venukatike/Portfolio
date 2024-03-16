import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  downloadFile() {
    // Implement your file download logic here
    // For instance, using a service or directly downloading a file
    // Example:
    window.location.href = '/assets/CV/Resume.pdf';
  }
}
