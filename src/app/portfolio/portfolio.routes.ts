import { Routes } from '@angular/router';
import { ReportDetail } from '../report-detail/report-detail';
import { Portfolio } from './portfolio';
import { ArkInventoryWaterLevel20260505 } from './report-detail/ark-inventory-water-level-20260505/ark-inventory-water-level-20260505';
import { ArkInventoryWaterLevel20260506 } from './report-detail/ark-inventory-water-level-20260506/ark-inventory-water-level-20260506';
import { ArkInventoryWaterLevel20260507 } from './report-detail/ark-inventory-water-level-20260507/ark-inventory-water-level-20260507';
import { ArkInventoryWaterLevel20260508 } from './report-detail/ark-inventory-water-level-20260508/ark-inventory-water-level-20260508';
import { ArkInventoryWaterLevel20260511 } from './report-detail/ark-inventory-water-level-20260511/ark-inventory-water-level-20260511';

export const portfolioRoutes: Routes = [
  { path: 'portfolio', component: Portfolio },
  {
    path: 'portfolio/ark-inventory-water-level-20260511',
    component: ArkInventoryWaterLevel20260511,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260508',
    component: ArkInventoryWaterLevel20260508,
  },
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
];
