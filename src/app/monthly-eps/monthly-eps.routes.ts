import { Routes } from '@angular/router';
import { ReportDetail } from '../report-detail/report-detail';
import { MonthlyEps } from './monthly-eps';
import { MonthlyEps20260430 } from './report-detail/2026-04-30/monthly-eps-20260430';

export const monthlyEpsRoutes: Routes = [
  { path: 'monthly-eps', component: MonthlyEps },
  { path: 'monthly-eps/2026-04-30', component: MonthlyEps20260430 },
  { path: 'monthly-eps/:slug', component: ReportDetail },
];
