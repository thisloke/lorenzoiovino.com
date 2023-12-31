import { Component } from '@angular/core';
import {FishComponent} from "../fish/fish.component";
import {CardCtaComponent} from "../card-cta/card-cta.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'iov-footer',
  standalone: true,
  imports: [
    CardCtaComponent,
    FishComponent,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
