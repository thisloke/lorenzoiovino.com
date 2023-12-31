import { Component } from '@angular/core';
import {Work} from "../models/work";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'iov-portfolio-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {
  work: Work | undefined;
}
