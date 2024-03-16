import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/Services/profile-data/profile-data.service';

@Component({
  selector: 'app-about',
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
experiences:any;

  constructor(private exp:ProfileDataService) {

  }
  ngOnInit(): void {
    this.experiences=this.exp.getmyExperience();
  }

  
}
