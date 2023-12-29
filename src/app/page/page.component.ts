import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'iov-page',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
