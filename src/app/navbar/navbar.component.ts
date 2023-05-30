import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  isDarkTheme: boolean = false;
  currentTheme: string;

  constructor(private themeService: ThemeService){}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getThemeService(): ThemeService {
    return this.themeService;
  }

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.isDarkTheme = !this.isDarkTheme;
      this.currentTheme = theme;
      // Perform any necessary actions based on the updated theme
    });
  }
}
