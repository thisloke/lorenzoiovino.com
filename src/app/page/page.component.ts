import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'iov-page',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
