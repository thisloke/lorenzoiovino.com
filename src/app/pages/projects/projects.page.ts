import { Component } from '@angular/core';
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";

@Component({
  selector: 'iov-projects-page',
  standalone: true,
  imports: [
    SectionComponent,
    PageComponent
  ],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss'
})
export class ProjectsPage {

}
