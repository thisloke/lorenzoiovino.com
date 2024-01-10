import { Routes } from '@angular/router';
import {BiographyPage} from "./pages/biography/biography.page";
import {BlogPage} from "./pages/blog/blog.page";
import {ProjectsPage} from "./pages/projects/projects.page";
import {HomePage} from "./pages/home/home.page";
import {PortfolioPage} from "./pages/portfolio/portfolio.page";
import {ContactMePage} from "./pages/contact-me/contact-me.page";
import {PageComponent} from "./page/page.component";
import {LikeDislikePage} from "./pages/like-dislike/like-dislike.page";
import {DisclaimerComponent as PortfolioDisclaimerComponent} from "./pages/portfolio/disclaimer/disclaimer.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'biography',
        component: BiographyPage,
      },
      {
        path : 'portfolio',
        component: PageComponent,
        children: [
          {
            path: '',
            component: PortfolioPage,
          },
          {
            path: 'disclaimer',
            component: PortfolioDisclaimerComponent,
          }
        ]
      },
      {
        path: 'projects',
        component: ProjectsPage,
      },
      {
        path: 'like-dislike',
        component: LikeDislikePage,
      },
      {
        path : 'blog',
        component: BlogPage,
      },
      {
        path: 'hello',
        component: ContactMePage,
      }
    ]
  }
];
