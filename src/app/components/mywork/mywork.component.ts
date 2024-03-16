import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/Services/profile-data/profile-data.service';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {
 projects:any;
 constructor(private profileData: ProfileDataService) {

 }
 ngOnInit(): void {
  this.projects=this.profileData.getProjects();
 }

}
