import { Component } from '@angular/core';
import {SectionComponent} from "../../../section/section.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'iov-disclaimer',
  standalone: true,
  imports: [
    SectionComponent,
    NgOptimizedImage
  ],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.scss'
})
export class DisclaimerComponent {

}
