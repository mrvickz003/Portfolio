import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  isDarkMode = signal<boolean>(this.loadTheme());

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      localStorage.setItem(this.THEME_KEY, dark ? 'dark' : 'light');
    });
  }

  toggleTheme() {
    this.isDarkMode.update(dark => !dark);
  }

  private loadTheme(): boolean {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
