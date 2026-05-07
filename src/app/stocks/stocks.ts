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
          title: 'TSLA Tesla 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/tsla-industry-whitepaper-20260507',
          summary: '依最新股價、近三年財報、電動車競爭、能源儲能、FSD 與 Robotaxi 選擇權製作。',
        },
        {
          title: 'BKSY BlackSky 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/bksy-industry-whitepaper-20260507',
          summary: '依最新 Q1 2026 財報、新合約、Gen-3 衛星、國防 ISR 需求與股價波動製作。',
        },
        {
          title: '台積電 (2330) 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/2330-tsmc-industry-whitepaper-20260507',
          summary: '依最新股價、近三年財報、AI 需求、先進製程與方舟庫存框架製作。',
        },
      ],
    },
  ];
}
