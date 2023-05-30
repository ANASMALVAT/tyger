import { Component,Input } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() cardData: any;

  currentTheme: string;
  constructor(private themeService: ThemeService){}
  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}
