import {Component, Input} from '@angular/core';
import {ButtonCtaComponent} from "../button-cta/button-cta.component";

@Component({
  selector: 'iov-card',
  standalone: true,
  imports: [
    ButtonCtaComponent
  ],
  templateUrl: './card-cta.component.html',
  styleUrl: './card-cta.component.scss'
})
export class CardCtaComponent {

  @Input() color: 'light' | 'dark' = 'light';
  @Input() ctaUrl: string = '';
}
