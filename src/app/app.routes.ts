import { Routes } from '@angular/router';
import {AboutPage} from "./pages/about/about.page";
import {BlogPage} from "./pages/blog/blog.page";
import {ProjectsPage} from "./pages/projects/projects.page";
import {HomePage} from "./pages/home/home.page";
import {PortfolioPage} from "./pages/portfolio/portfolio.page";
import {ContactMePage} from "./pages/contact-me/contact-me.page";

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path : 'portfolio',
    component: PortfolioPage,
  },
  {
    path : 'blog',
    component: BlogPage,
  },
  {
    path: 'projects',
    component: ProjectsPage,
  },
  {
    path: 'hello',
    component: ContactMePage,
  }
];
