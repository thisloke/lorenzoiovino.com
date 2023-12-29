import {Component} from '@angular/core';
import {AsciiPhotoComponent} from "../ascii-photo/ascii-photo.component";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'iov-hero',
  standalone: true,
  imports: [
    AsciiPhotoComponent,
    NgIf,
    NgClass,
    AsyncPipe,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor() {
  }
}
