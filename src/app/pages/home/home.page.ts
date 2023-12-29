import { Component } from '@angular/core';
import {HeroComponent} from "../../hero/hero.component";
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {FooterComponent} from "../../footer/footer.component";
import {CardComponent} from "../../card/card.component";
import {ArrowScrollDownComponent} from "../../arrow-scroll-down/arrow-scroll-down.component";

@Component({
  selector: 'iov-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    SectionComponent,
    PageComponent,
    FooterComponent,
    CardComponent,
    ArrowScrollDownComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
