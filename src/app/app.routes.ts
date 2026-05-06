import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MonthlyEps } from './monthly-eps/monthly-eps';
import { MorningNews } from './morning-news/morning-news';
import { Portfolio } from './portfolio/portfolio';
import { ReportDetail } from './report-detail/report-detail';
import { Stocks } from './stocks/stocks';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'morning-news', component: MorningNews },
  { path: 'morning-news/:slug', component: ReportDetail },
  { path: 'portfolio', component: Portfolio },
  { path: 'portfolio/:slug', component: ReportDetail },
  { path: 'monthly-eps', component: MonthlyEps },
  { path: 'monthly-eps/:slug', component: ReportDetail },
  { path: 'stocks', component: Stocks },
  { path: 'stocks/:slug', component: ReportDetail },
  { path: '**', redirectTo: '' },
];
