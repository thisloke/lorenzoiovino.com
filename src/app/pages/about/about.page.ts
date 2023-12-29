import { Component } from '@angular/core';
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";

@Component({
  selector: 'iov-about-page',
  standalone: true,
  imports: [
    SectionComponent,
    PageComponent
  ],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPage {

}
