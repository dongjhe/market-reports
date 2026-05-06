import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type MonthlyEpsReport = {
  title: string;
  date: string;
  path: string;
  summary: string;
};

@Component({
  selector: 'app-monthly-eps',
  imports: [RouterLink],
  templateUrl: './monthly-eps.html',
  styleUrl: './monthly-eps.scss',
})
export class MonthlyEps {
  readonly intro =
    '這裡整理每月金控 EPS 追蹤；清單資料集中放在 monthly-eps.ts，新增報告時只要補資料即可。';

  readonly reports: MonthlyEpsReport[] = [
    {
      title: '每月金控 EPS 追蹤',
      date: '2026-04-30',
      path: '/monthly-eps/2026-04-30',
      summary: '最新正式版，含凱基金、富邦金、兆豐金三大重點追蹤區塊。',
    },
  ];
}
