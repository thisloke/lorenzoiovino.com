import {Component, Input} from '@angular/core';
import {ButtonCtaComponent} from "../button-cta/button-cta.component";

@Component({
  selector: 'iov-card',
  standalone: true,
  imports: [
    ButtonCtaComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() color: 'light' | 'dark' = 'light';
  @Input() ctaUrl: string = '';
}
