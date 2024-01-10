import {Component} from '@angular/core';
import {AsciiPhotoComponent} from "../ascii-photo/ascii-photo.component";
import {AsyncPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {Ng2FittextModule} from "ng2-fittext";

@Component({
  selector: 'iov-hero',
  standalone: true,
  imports: [
    AsciiPhotoComponent,
    NgIf,
    NgClass,
    AsyncPipe,
    NgOptimizedImage,
    Ng2FittextModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor() {
  }
}
