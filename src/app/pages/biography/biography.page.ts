import { Component } from '@angular/core';
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {NgOptimizedImage} from "@angular/common";

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
export class BiographyPage {

}
