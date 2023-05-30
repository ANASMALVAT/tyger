import { Component , Input} from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
@Component({
  selector: 'app-vision-card',
  templateUrl: './vision-card.component.html',
  styleUrls: ['./vision-card.component.scss']
})
export class VisionCardComponent {
    @Input() cardData : any;

    currentTheme: string = 'light';
    constructor(private themeService: ThemeService){}
    
    ngOnInit(): void {
      this.themeService.currentTheme$.subscribe(theme => {
        this.currentTheme = theme;
      });
    }
}
