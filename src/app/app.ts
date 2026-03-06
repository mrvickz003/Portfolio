import { Component, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [
    About,
    Contact,
    Footer,
    Hero,
    Navbar,
    Projects
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  constructor(public themeService: ThemeService) {}
  protected title = 'portfolio';

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}
