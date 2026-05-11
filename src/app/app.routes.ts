import { Routes } from '@angular/router';
import { Home } from './home/home';
import { monthlyEpsRoutes } from './monthly-eps/monthly-eps.routes';
import { morningNewsRoutes } from './morning-news/morning-news.routes';
import { portfolioRoutes } from './portfolio/portfolio.routes';
import { stocksRoutes } from './stocks/stocks.routes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  ...morningNewsRoutes,
  ...monthlyEpsRoutes,
  ...portfolioRoutes,
  ...stocksRoutes,
  { path: '**', redirectTo: '' },
];
