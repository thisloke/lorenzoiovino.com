import { Component } from '@angular/core';
import {SectionComponent} from "../section/section.component";
import {Post} from "../models/post";
import {PostCardComponent} from "../post-card/post-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'iov-highlight',
  standalone: true,
  imports: [
    SectionComponent,
    PostCardComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {
  posts: Post[] = [
    {
      title: 'Post 1',
      description: 'Description 1',
      content: 'Content 1',
      date: new Date(),
      readTime: 1,
      slug: 'post-1',
      image: 'https://picsum.photos/300/200'
    },
    {
      title: 'Post 1',
      description: 'Description 1',
      content: 'Content 1',
      date: new Date(),
      readTime: 1,
      slug: 'post-1',
      image: 'https://picsum.photos/300/200'
    },
    {
      title: 'Post 1',
      description: 'Description 1',
      content: 'Content 1',
      date: new Date(),
      readTime: 1,
      slug: 'post-1',
      image: 'https://picsum.photos/300/200'
    },{
      title: 'Post 1',
      description: 'Description 1',
      content: 'Content 1',
      date: new Date(),
      readTime: 1,
      slug: 'post-1',
      image: 'https://picsum.photos/300/200'
    },{
      title: 'Post 1',
      description: 'Description 1',
      content: 'Content 1',
      date: new Date(),
      readTime: 1,
      slug: 'post-1',
      image: 'https://picsum.photos/300/200'
    }
  ]

}
