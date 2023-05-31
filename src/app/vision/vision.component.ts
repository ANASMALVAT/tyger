import { Component , ViewEncapsulation} from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VisionComponent {
  constructor(private themeService: ThemeService){}

  visions = [
    { imageUrl: '../assets/images/gif/Infra.gif', title: 'Unveiling The Epic Website Deployment Odyssey' },
  ];

  currentTheme: string = 'light';

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

}
