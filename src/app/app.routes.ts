import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MonthlyEps } from './monthly-eps/monthly-eps';
import { MorningNews } from './morning-news/morning-news';
import { ArkInventoryWaterLevel20260505 } from './portfolio/report-detail/ark-inventory-water-level-20260505/ark-inventory-water-level-20260505';
import { Portfolio } from './portfolio/portfolio';
import { ReportDetail } from './report-detail/report-detail';
import { Stocks } from './stocks/stocks';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'morning-news', component: MorningNews },
  { path: 'morning-news/:slug', component: ReportDetail },
  { path: 'portfolio', component: Portfolio },
  {
    path: 'portfolio/ark-inventory-water-level-20260505',
    component: ArkInventoryWaterLevel20260505,
  },
  { path: 'portfolio/:slug', component: ReportDetail },
  { path: 'monthly-eps', component: MonthlyEps },
  { path: 'monthly-eps/:slug', component: ReportDetail },
  { path: 'stocks', component: Stocks },
  { path: 'stocks/:slug', component: ReportDetail },
  { path: '**', redirectTo: '' },
];
