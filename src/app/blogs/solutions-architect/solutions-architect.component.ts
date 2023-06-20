import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-solutions-architect',
  templateUrl: './solutions-architect.component.html',
  styleUrls: ['./solutions-architect.component.scss']
})
export class SolutionsArchitectComponent {
  constructor(private themeService: ThemeService){}

  currentTheme: string = 'light';

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
      console.log(this.currentTheme)
    });
  }
}
