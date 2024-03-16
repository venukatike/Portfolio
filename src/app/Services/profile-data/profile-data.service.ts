import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor() { }

  myExperience:any=[{
          companyName:"Atos Syntel,Pune",
          experienceFromTo:"Present - 24 Jan 2022",
          desc:'Working as a Dot Net FullStack Developer',  },
          {
            companyName:"B.Tech in Computer Science",
            experienceFromTo:"2017 -2021",
            desc:'B.Tech Graduate in Computer Science and Engineering',
       
    }]
  projects:any = [
   
    {
      id: 1,
      title: 'My Portfolio',
      desc: 'My Portfolio developed using Angular and Bootstrap',
      livedemo: 'https://venukatike.com/',
      githuburl: 'https://github.com/venukatike/Portfolio',
      imgUrl: '/assets/images/portfolio.png',
      tech: 'Angular , Bootstrap 5, Html    , CSS'
    },

    {
      id: 2,
      title: 'WeatherApp',
      desc: 'Its a weather app developed by me venu katike',
      livedemo: 'https://weatherapp.venukatike.com/',
      githuburl: 'https://github.com/venukatike/JavaScript-Projects',
      imgUrl: "/assets/images/WeatherApp.png",
      tech: 'HTML, CSS, JavaScript, OpenWeatherApi'
    },
    {
      id: 3,
      title: 'Lab Management System',
      desc: 'LMS is a .NetCore and Angular 16 CRUD Example',
      livedemo: 'https://labmanagementsystem.venukatike.com',
      githuburl: 'https://github.com/venukatikeatos/HCA',
      imgUrl: '/assets/images/LMS Project.png',
      tech: 'Angular 16, DotNet core ,Web Api'
    }, {
      id: 4,
      title: 'My Portfolio',
      desc: 'My Portfolio developed using Angular and Bootstrap',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githuburl: 'https://github.com/venukatike/Portfolio',
      imgUrl: '/assets/images/portfolio.png',
      tech: 'Angular , Bootstrap 5, Html    , CSS'
    },

    {
      id: 5,
      title: 'WeatherApp',
      desc: 'Its a weather app developed by me venu katike',
      livedemo: 'https://weatherapp.venukatike.com/',
      githuburl: 'https://github.com/venukatike/JavaScript-Projects',
      imgUrl: "/assets/images/WeatherApp.png",
      tech: 'HTML, CSS, JavaScript, OpenWeatherApi'
    },
    {
      id: 6,
      title: 'Lab Management System',
      desc: 'LMS is a .NetCore and Angular 16 CRUD Example',
      livedemo: 'https://labmanagementsystem.venukatike.com',
      githuburl: 'https://github.com/venukatikeatos/HCA',
      imgUrl: '/assets/images/LMS Project.png',
      tech: 'Angular 16, DotNet core ,Web Api'
    },
    

  ]

  skills:any=[
    {
      id:1,
      imgUrl:"/assets/images/angular.png",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/javascript.svg",
      tech:'JavaScript'
    },
    {
      id:1,
      imgUrl:"/assets/images/css3.svg",
      tech:'CSS'
    },
    {
      id:1,
      imgUrl:"/assets/images/html5.svg",
      tech:'HTML'
    },
    {
      id:1,
      imgUrl:"/assets/images/bootstrap.svg",
      tech:'HTML'
    },
    {
      id:1,
      imgUrl:"/assets/images/icon-.net-framework.png",
      tech:'.Net Core'
    },
    {
      id:1,
      imgUrl:"/assets/images/csharp.png",
      tech:'C Sharp'
    },
    {
      id:1,
      imgUrl:"/assets/images/Linq.png",
      tech:'MVC'
    },
    {
      id:1,
      imgUrl:"/assets/images/icon-.net-framework.png",
      tech:'Entity Framework'
    },
    {
      id:1,
      imgUrl:"/assets/images/SSMS.png",
      tech:'SQL Server Management Studio'
    },
    {
      id:1,
      imgUrl:"/assets/images/vue-js.png",
      tech:'Vue JS'
    },
    {
      id:1,
      imgUrl:"/assets/images/materialui.svg",
      tech:'Material UI'
    },
    {
      id:1,
      imgUrl:"/assets/images/sass.png",
      tech:'sass'
    },
    {
      id:1,
      imgUrl:"/assets/images/postman.png",
      tech:'PostMan'
    },
    {
      id:1,
      imgUrl:"/assets/images/Visual Studio.png",
      tech:'Visual Studio'
    },
    {
      id:1,
      imgUrl:"/assets/images/vscode.png",
      tech:'vs code'
    },
    {
      id:1,
      imgUrl:"/assets/images/git.svg",
      tech:'Git'
    },
    {
      id:1,
      imgUrl:"/assets/images/jwt.png",
      tech:'JWT'
    }
  ]

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  getSkills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skills;
  }
  getmyExperience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.myExperience;
  }
}
