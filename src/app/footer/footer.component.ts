import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'iov-footer',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
