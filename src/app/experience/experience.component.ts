import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  currentTheme: string;
  constructor(private themeService: ThemeService){}

  experiences = [
    {company: "Canada Revenue Agency", position: "IT Specialist", time: "Jan 2023 - May 2023"},
    {company: "Dalhousie University", position: "Co-Founder: DALCSL", time: "Mar 2023 - On going "},
    {company: "Dalhousie University", position: "Teaching Assistant", time: "Sept 2022 - Dec 2022"},
  ];
 
  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}
