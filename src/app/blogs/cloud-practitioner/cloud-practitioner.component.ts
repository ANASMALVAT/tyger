import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-cloud-practitioner',
  templateUrl: './cloud-practitioner.component.html',
  styleUrls: ['./cloud-practitioner.component.scss']
})

export class CloudPractitionerComponent {
  constructor(private themeService: ThemeService){}

  currentTheme: string = 'light';

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
      console.log(this.currentTheme)
    });
  }
}
