import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {HeroComponent} from "./hero/hero.component";
import {SectionComponent} from "./section/section.component";
import {FooterComponent} from "./footer/footer.component";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'iov-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, HeroComponent, SectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private metaTagService: Meta) {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Lorenzo Iovino, lorenzoiovino.com, Software Developer, Software Engineer, Sicily, Computer Science, Blog, Personal Page',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Lorenzo Iovino' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
    ]);
  }
}
