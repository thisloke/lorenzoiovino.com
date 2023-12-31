import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Job} from "../../../models/job";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'iov-portfolio-item-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './portfolio-item-card.component.html',
  styleUrl: './portfolio-item-card.component.scss'
})
export class PortfolioItemCardComponent {
  @Output() expand: EventEmitter<void> = new EventEmitter<void>();
  @Input() job: Job | undefined
  @Input() expanded: boolean = false;
}
