import { Component } from '@angular/core';
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'iov-portfolio-page',
  standalone: true,
  imports: [
    SectionComponent,
    PageComponent,
    FooterComponent
  ],
  templateUrl: './portfolio.page.html',
  styleUrl: './portfolio.page.scss'
})
export class PortfolioPage {

}
