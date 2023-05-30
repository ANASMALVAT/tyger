import { Component, Input } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  currentTheme: string = 'light';
  constructor(private themeService: ThemeService){}

  @Input() cardData:any;


  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  
}
