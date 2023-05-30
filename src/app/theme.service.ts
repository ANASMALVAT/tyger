import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<string>;
  public currentTheme$: Observable<string>;

  constructor() {
    this.currentThemeSubject = new BehaviorSubject<string>('light');
    this.currentTheme$ = this.currentThemeSubject.asObservable();
  }

  public getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  public toggleTheme(): void {
    const newTheme = this.currentThemeSubject.value === 'light' ? 'dark' : 'light';
    this.currentThemeSubject.next(newTheme);
  }
}
