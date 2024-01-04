import { Component } from '@angular/core';
import {ButtonCtaComponent} from "../button-cta/button-cta.component";
import {Router} from "@angular/router";

@Component({
  selector: 'iov-menu',
  standalone: true,
  imports: [
    ButtonCtaComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(public router: Router) {

  }


}
