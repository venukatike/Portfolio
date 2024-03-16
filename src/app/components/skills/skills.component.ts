import { Component } from '@angular/core';
import { ProfileDataService } from 'src/app/Services/profile-data/profile-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills:any;
  constructor(private skill:ProfileDataService) {
    
  }
  ngOnInit(): void {
    this.skills=this.skill.getSkills();
   }
}
