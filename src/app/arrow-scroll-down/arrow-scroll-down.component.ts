import {Component, HostListener} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'iov-arrow-scroll-down',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './arrow-scroll-down.component.html',
  styleUrl: './arrow-scroll-down.component.scss'
})
export class ArrowScrollDownComponent {

  visible: boolean = true;

  scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkIfPageIsStillOnTop() {
    this.visible = window.scrollY <= 100;
  }
}
