import { Component } from '@angular/core';
import {HeroComponent} from "../../hero/hero.component";
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {FooterComponent} from "../../footer/footer.component";
import {ArrowScrollDownComponent} from "../../arrow-scroll-down/arrow-scroll-down.component";
import {FishComponent} from "../../fish/fish.component";
import {HighlightComponent} from "../../highlight/highlight.component";
import {CardCtaComponent} from "../../card-cta/card-cta.component";

@Component({
  selector: 'iov-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    SectionComponent,
    PageComponent,
    FooterComponent,
    CardCtaComponent,
    ArrowScrollDownComponent,
    FishComponent,
    HighlightComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
