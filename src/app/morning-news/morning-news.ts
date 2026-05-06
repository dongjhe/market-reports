import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type MorningNewsReport = {
  title: string;
  date: string;
  path: string;
  summary: string;
};

@Component({
  selector: 'app-morning-news',
  imports: [RouterLink],
  templateUrl: './morning-news.html',
  styleUrl: './morning-news.scss',
})
export class MorningNews {
  readonly intro =
    '這裡整理每日市場晨報；清單資料集中放在 morning-news.ts，新增晨報時只要補資料即可。';

  readonly reports: MorningNewsReport[] = [
    {
      title: '美股盤前晨報｜正式預覽版',
      date: '2026-04-30',
      path: '/morning-news/2026-04-30',
      summary: '已包含四格摘要卡、市場溫度儀表板、台股產業連動與七巨頭區塊。',
    },
  ];
}
