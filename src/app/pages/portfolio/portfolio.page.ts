import { Component } from '@angular/core';
import {SectionComponent} from "../../section/section.component";
import {PageComponent} from "../../page/page.component";
import {FooterComponent} from "../../footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {PortfolioItemCardComponent} from "./portfolio-item-card/portfolio-item-card.component";
import {Job} from "../../models/job";
@Component({
  selector: 'iov-portfolio-page',
  standalone: true,
  imports: [
    SectionComponent,
    PageComponent,
    FooterComponent,
    RouterOutlet,
    NgForOf,
    NgIf,
    PortfolioItemCardComponent
  ],
  templateUrl: './portfolio.page.html',
  styleUrl: './portfolio.page.scss'
})
export class PortfolioPage {

  expandedJob: number = -1;
  jobs: Job[] = [
    {
      name: 'ChiamarsiBomber',
      role: 'CTO',
      description: 'As the CTO of ChiamarsiBomber, I lead the charge in developing a cutting-edge web platform for football infotainment. <br/>Navigating the intricacies of real-time data integration and ensuring high availability during peak periods, I orchestrate the small (3 person) IT team to deliver a seamless experience.',
      website: 'https://chiamarsibomber.com/',
      image: 'assets/portfolio/chiamarsibomber.jpeg'
    },
    {
      name: 'Iubenda',
      role: 'Lead Backend Engineer',
      description: 'At Iubenda, I assumed the role of Lead Backend Engineer, steering a small team in the maintenance and evolution of the critical Radar code product.  <br/>This crawler identifies GDPR non-compliant websites, playing a pivotal role in revenue generation',
      website: 'https://iubenda.com/',
      image: 'assets/portfolio/iubenda.png'
    },
    {
      name: 'Alcon',
      role: 'Frontend Developer',
      description: 'At Alcon, I was responsible for the development of a new web platform for the Vision Care. <br/>I worked closely with the UX team to deliver a seamless experience, and with the backend team to ensure a smooth integration with the existing systems.',
      website: 'https://alcon.com/',
      image: 'assets/portfolio/alcon.png'
    },
    {
      name: 'Acker',
      role: 'Lead Frontend Developer',
      description: 'As the Lead Frontend Developer at Welance, I spearheaded the development of <a href="https://acker.co">Acker.co</a>, an educational website for a green kids project. Balancing speed and optimization, I made architectural decisions, utilizing Nuxt (a Vue framework), and collaborated on crafting a captivating user experience.',
      website: 'https://acker.co/',
      image: 'assets/portfolio/acker.svg'
    },
    {
      name: 'Medicami',
      role: 'Fullstack Developer',
      description: 'I\'ve realized a mobile App with Ionic that connected with neoped to manage the medical visits. <br/>I\'ve also realized the backend with Loopback and the frontend with Angular. The app was in the stores for 4 years, then the company was dismissed and neoped product sell.',
      website: 'https://hotel-net.it/',
      image: 'assets/portfolio/medicami.png'
    },
    {
      name: 'HotelNet',
      role: 'Lead Frontend Developer',
      description: 'I realized the frontend of the HotelNet\'s Booking Engine widget. Hotelnet is a company that provides IT services to hotels. <br/>I worked closely with the UX team to deliver a seamless experience, and with the backend team to ensure a smooth integration with the existing systems.',
      website: 'https://hotel-net.it/',
      image: 'assets/portfolio/hotelnet.png'
    },
    {
      name: 'FullstackAgency',
      role: 'Lead Frontend Developer',
      description: 'As the Lead Frontend Developer at FullstackAgency, I was responsible for the development of the first version of the frontend of Romeo. <br/>I worked closely with the UX team to deliver a seamless experience, and with the backend team to ensure a smooth integration with the existing systems.',
      website: 'https://www.fullstackagency.it/',
      image: 'assets/portfolio/fullstackagency.png'
    },
    {
      name: 'CsProject',
      role: 'Lead Frontend Developer',
      description: 'My role at CsProject involved creating a new web-based product based on a legacy .NET system (PROMAN), not only from the execution point of view but also taking care of building up a new team, making a delivery plan and allocating resources. Through strategic planning and team collaboration, we successfully bridged the past and future, delivering a modern, responsive, and user-friendly experience.',
      website: 'https://csproject.com/',
      image: 'assets/portfolio/csproject.png'
    },
  ]

  expand(index: number) {
    this.expandedJob = index;
  }
}
