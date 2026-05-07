import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type PortfolioReport = {
  title: string;
  date: string;
  path: string;
  summary: string;
};

type PortfolioReportGroup = {
  label: string;
  reports: PortfolioReport[];
};

@Component({
  selector: 'app-stocks',
  imports: [RouterLink],
  templateUrl: './stocks.html',
  styleUrl: './stocks.scss',
})
export class Stocks {
  readonly intro = '這裡集中所有個股專頁。';

  readonly reportGroups: PortfolioReportGroup[] = [
    {
      label: '一般庫存分析',
      reports: [
        {
          title: '2026-05-07｜台積電 (2330) 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/2330-tsmc-industry-whitepaper-20260507',
          summary: '依最新股價、近三年財報、AI 需求、先進製程與方舟庫存框架製作。',
        },
      ],
    },
  ];
}
