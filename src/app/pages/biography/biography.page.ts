import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {DOCUMENT, NgOptimizedImage} from "@angular/common";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'iov-biography-page',
  standalone: true,
  imports: [
    SectionComponent,
    PageComponent,
    NgOptimizedImage
  ],
  templateUrl: './biography.page.html',
  styleUrl: './biography.page.scss'
})
export class BiographyPage implements OnInit, OnDestroy {

  constructor(private title: Title,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.title.setTitle('Lorenzo Iovino >> Biography');
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://www.lorenzoiovino.com/biography');
    this.document.head.appendChild(link);
  }

  ngOnDestroy() {
    const link: HTMLLinkElement = this.document.querySelector('link[rel="canonical"]')!;
    this.document.head.removeChild(link);
  }
}
