import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {HeroComponent} from "./hero/hero.component";
import {SectionComponent} from "./section/section.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'iov-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, HeroComponent, SectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'loreiov.com';
}
