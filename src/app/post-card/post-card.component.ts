import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {JsonPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'iov-post-card',
  standalone: true,
  imports: [
    JsonPipe,
    NgOptimizedImage
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post: Post | undefined;
}
