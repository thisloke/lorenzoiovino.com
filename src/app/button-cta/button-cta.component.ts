import {Component, Input} from '@angular/core';

@Component({
  selector: 'iov-button-cta',
  standalone: true,
  imports: [],
  templateUrl: './button-cta.component.html',
  styleUrl: './button-cta.component.scss'
})
export class ButtonCtaComponent {
  @Input() url: string = '';
}
