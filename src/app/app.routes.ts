import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MonthlyEps } from './monthly-eps/monthly-eps';
import { MonthlyEps20260430 } from './monthly-eps/report-detail/2026-04-30/monthly-eps-20260430';
import { MorningNews } from './morning-news/morning-news';
import { MorningNews20260430 } from './morning-news/report-detail/2026-04-30/morning-news-20260430';
import { ArkInventoryWaterLevel20260505 } from './portfolio/report-detail/ark-inventory-water-level-20260505/ark-inventory-water-level-20260505';
import { ArkInventoryWaterLevel20260506 } from './portfolio/report-detail/ark-inventory-water-level-20260506/ark-inventory-water-level-20260506';
import { ArkInventoryWaterLevel20260507 } from './portfolio/report-detail/ark-inventory-water-level-20260507/ark-inventory-water-level-20260507';
import { Portfolio } from './portfolio/portfolio';
import { ReportDetail } from './report-detail/report-detail';
import { Stocks } from './stocks/stocks';
import { TsmcIndustryWhitepaper20260507 } from './stocks/report-detail/2330-tsmc-industry-whitepaper-20260507/2330-tsmc-industry-whitepaper-20260507';
import { BksyIndustryWhitepaper20260507 } from './stocks/report-detail/bksy-industry-whitepaper-20260507/bksy-industry-whitepaper-20260507';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'morning-news', component: MorningNews },
  { path: 'morning-news/2026-04-30', component: MorningNews20260430 },
  { path: 'morning-news/:slug', component: ReportDetail },
  { path: 'portfolio', component: Portfolio },
  {
    path: 'portfolio/ark-inventory-water-level-20260507',
    component: ArkInventoryWaterLevel20260507,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260506',
    component: ArkInventoryWaterLevel20260506,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260505',
    component: ArkInventoryWaterLevel20260505,
  },
  { path: 'portfolio/:slug', component: ReportDetail },
  { path: 'monthly-eps', component: MonthlyEps },
  { path: 'monthly-eps/2026-04-30', component: MonthlyEps20260430 },
  { path: 'monthly-eps/:slug', component: ReportDetail },
  { path: 'stocks', component: Stocks },
  {
    path: 'stocks/bksy-industry-whitepaper-20260507',
    component: BksyIndustryWhitepaper20260507,
  },
  {
    path: 'stocks/2330-tsmc-industry-whitepaper-20260507',
    component: TsmcIndustryWhitepaper20260507,
  },
  { path: 'stocks/:slug', component: ReportDetail },
  { path: '**', redirectTo: '' },
];
