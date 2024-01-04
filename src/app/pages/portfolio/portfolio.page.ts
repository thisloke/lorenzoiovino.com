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
      role: 'Tech Lead',
      description: 'I lead the charge in developing a cutting-edge web platform for football infotainment. <br/>Navigating the intricacies of real-time data integration and ensuring high availability during peak periods, I orchestrate the small (3 person) team to deliver the best experience for our customers.',
      website: 'https://chiamarsibomber.com/',
      image: 'assets/portfolio/chiamarsibomber.jpeg'
    },
    {
      name: 'Iubenda',
      role: 'Lead Backend Engineer',
      description: 'I assumed the role of Lead Backend Engineer, steering a small team in the maintenance and evolution of the critical Radar code product (<b>NodeJs + Typescript</b>).<br/>' +
        'This crawler identifies GDPR non-compliant websites, playing a pivotal role in revenue generation.<br/>',
      website: 'https://radar.iubenda.com/docs/',
      image: 'assets/portfolio/iubenda.png'
    },
    {
      name: 'Alcon',
      role: 'Frontend Developer',
      description: 'I was responsible for the development of a new web platform for the Vision Care department.<br/>' +
        'I worked closely with the UX team and a huge FE team (30 people) to deliver a seamless experience, and with the backend team to ensure a smooth integration with the existing systems.<br/>' +
        'The whole project was based on <b>Angular + SAP Spartacus</b> for FE.<br/>',
      website: 'https://www.myalcon.com',
      image: 'assets/portfolio/alcon.png'
    },
    {
      name: 'Acker',
      role: 'Lead Frontend Developer',
      description: 'I spearheaded the development of an educational website for kids for the acker german startup.<br/>' +
        'I also made architectural decisions in order to improve SEO and speed, deciding to utilize <b>Nuxt</b> (a <b>Vue</b> framework) for FE and <b>Strapi</b> for the BE and to manage the myriad of integrated external services.<br/>' +
        'I’ve also worked on the implementation of their backoffice bootstrapping the project and then handing over the know-how and the codebase to their internal tech team.<br/>',
      website: 'https://acker.co/',
      image: 'assets/portfolio/acker.svg'
    },
    {
      name: 'Medicami',
      role: 'Tech Lead',
      description: 'I\'ve realized a mobile App with <b>Angular + Ionic + Loopack</b> that communicates with neoped (pediatric CRM) to manage medical remote visits, managing health documents. I’ve also built the whole <b>CI/CD</b< and the <b>AWS</b> infrastructure (ECS + ECR). <br/>' +
        'The backoffice and the landing page was realized in <b>Nuxt</b> with a focus on SEO and performance.<br/>' +
        'The app was in the app stores for 3 years (with 4.5 avg point review), then the company was dismissed and neoped product sold.<br/>',
      website: undefined,
      image: 'assets/portfolio/medicami.png'
    },
    {
      name: 'Fullstack Agency',
      role: 'Frontend Developer',
      description: 'As a Frontend Developer at FullstackAgency, I was responsible for the development of the first version of the frontend of one of their MVP products.<br/>' +
        'I worked closely with the UX team and with the backend team to ensure a smooth integration with the existing systems.<br/>' +
        'I also realized for the project (in <b>Angular</b>) a huge UI library with Storybook with reusable components.<br/>',
      website: 'https://www.fullstackagency.it/',
      image: 'assets/portfolio/fullstackagency.png'
    },
    {
      name: 'CsProject',
      role: 'Tech Lead',
      description: 'My role at CsProject involved creating a new web-based product based on a legacy .NET system (PROMAN), not only from the implementation point of view (<b>Angular + Express</b>) but also taking care of creating up a development team, making a delivery plan and allocating resources.<br/>' +
        'Through strategic planning and team collaboration, we successfully bridged the past and future, delivering a modern, responsive, and user-friendly experience.<br/>',
      website: 'https://www.csproject.it/',
      image: 'assets/portfolio/csproject.png'
    },
    {
      name: 'Tuotempo',
      role: 'Frontend Developer',
      description: 'As part of the team at Tuotempo, I actively contributed to the development of a crucial web application for healthcare management. This application is a SaaS and it serves multiple hospitals (worldwide), streamlining patient care processes.<br/>' +
        'I evolved and maintained the existing application utilizing <b>Backbone.js</b> to ensure an efficient and responsive user experience.<br/>',
      website: 'https://tuotempo.it/',
      image: 'assets/portfolio/tuotempo.svg'
    },
  ]

  expand(index: number) {
    this.expandedJob = index;
  }
}
