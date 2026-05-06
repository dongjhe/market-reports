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
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly intro =
    '這裡整理庫存分析報告；清單資料集中放在 portfolio.ts，新增報告時只要補資料即可。';

  readonly reportGroups: PortfolioReportGroup[] = [
    {
      label: '一般庫存分析',
      reports: [
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-05',
          path: '/portfolio/ark-inventory-water-level-20260505',
          summary: '完整整合桌面 HTML 報告，保留台美股庫存總覽、水位判斷與分批布局節奏。',
        },
      ],
    },
  ];
}
