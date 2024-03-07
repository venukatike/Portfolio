import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/Services/Smooth-Scroll/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo='Venu Katike';
  constructor(private scrollService:ScrollService) {

  }
  ngOnInit(): void {
  }

  scrollToAbout(): void {
    this.scrollService.scrollToElement('contact');
  }
  scrollToSkills(): void {
    this.scrollService.scrollToElement('contact');
  }
}
