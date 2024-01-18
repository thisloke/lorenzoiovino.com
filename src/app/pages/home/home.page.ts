import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {HeroComponent} from "../../hero/hero.component";
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {FooterComponent} from "../../footer/footer.component";
import {ArrowScrollDownComponent} from "../../arrow-scroll-down/arrow-scroll-down.component";
import {FishComponent} from "../../fish/fish.component";
import {HighlightComponent} from "../../highlight/highlight.component";
import {CardCtaComponent} from "../../card-cta/card-cta.component";
import {Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

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
export class HomePage implements OnInit, OnDestroy {

  constructor(private title: Title,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.title.setTitle('Lorenzo Iovino >> Home');
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://www.lorenzoiovino.com');
    this.document.head.appendChild(link);
  }

  ngOnDestroy() {
    const link: HTMLLinkElement = this.document.querySelector('link[rel="canonical"]')!;
    this.document.head.removeChild(link);
  }
}
