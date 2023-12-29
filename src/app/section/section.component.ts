import {Component, Input} from '@angular/core';

@Component({
  selector: 'iov-section',
  standalone: true,
  imports: [
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() titleColor: 'light' | 'dark' = 'light';
  @Input() backgroundImageUrl: string = '';
}
