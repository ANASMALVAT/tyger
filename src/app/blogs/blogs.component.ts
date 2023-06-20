import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent {
  constructor(private themeService: ThemeService){}

  blogs = [
    {path: 'GeeksForGeeks', imageUrl: 'assets/images/blogs/gfg1.jpg', content: 'My Journey From The Bottom To Top.', /* title: 'Excelling GeeksForGeeks Leaderboard!', */  },
    {path: 'solutions-architect', imageUrl: 'assets/images/blogs/solutions-architect.png'/*, title: 'AWS Certified Solutions Architect - Associate (2023)'*/,content: 'How did I crack SAA-CO3 in 2 months'},
    {path: 'cloud-practitioner' , imageUrl: 'assets/images/blogs/aws2.png' /*, title: 'AWS Certified Cloud Practitioner (2023)'*/, content: 'How did I crack CLF-CO1 in 2 Weeks'},
    // {path: 'hacker-rank',imageUrl: 'assets/images/blogs/hacker-rank.png' /*, title: 'HackerRank Problem Solving Assessment'*/, content: 'HackerRank Problem Solving Assessments!'},
  ];
  currentTheme: string = 'light';

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

}
