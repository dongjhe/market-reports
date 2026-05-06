import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monthly-eps-20260430',
  imports: [RouterLink],
  templateUrl: './monthly-eps-20260430.html',
  styleUrl: './monthly-eps-20260430.scss',
})
export class MonthlyEps20260430 {
  readonly category = '每月金控 EPS';
  readonly sectionPath = '/monthly-eps';
  readonly title = '每月金控 EPS 追蹤';
  readonly summary =
    '追蹤主要金控每月 EPS 表現，將核心公司、趨勢變化與後續觀察重點整理成單一頁面。';

  readonly metrics = [
    { label: '報告日期', value: '2026-04-30' },
    { label: '追蹤標的', value: '金控股' },
    { label: '更新頻率', value: '每月' },
  ];

  readonly highlights = [
    '聚焦凱基金、富邦金、兆豐金三大追蹤區塊。',
    '以月度 EPS 變化辨識金融股基本面節奏。',
    '保留後續更新時可延伸的路由與頁面結構。',
  ];
}
