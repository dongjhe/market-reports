import { Routes } from '@angular/router';
import { ReportDetail } from '../report-detail/report-detail';
import { MorningNews } from './morning-news';
import { MorningNews20260430 } from './report-detail/2026-04-30/morning-news-20260430';

export const morningNewsRoutes: Routes = [
  { path: 'morning-news', component: MorningNews },
  { path: 'morning-news/2026-04-30', component: MorningNews20260430 },
  { path: 'morning-news/:slug', component: ReportDetail },
];
