import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  currentTheme: string = 'light';
  constructor(private themeService: ThemeService){}

  projects = [
    {imageUrl: 'assets/images/projects/java4.png',  title: 'Distributed Database Management System', content: ''},
    {imageUrl: 'assets/images/projects/rdj4.png', title: 'Dalhousie Multifaith Service', content: ''},
    {imageUrl: 'assets/images/projects/raws.jpg', title: 'Serverless Bed & Breakfast', content: ''},
    {imageUrl: 'assets/images/projects/rfb.png', title: 'RentoCar',content: ''},
    {imageUrl: 'assets/images/projects/raws.jpg', title: 'LambdaHub', content: ''},
  ];

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}
