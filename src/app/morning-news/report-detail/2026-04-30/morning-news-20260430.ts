import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-morning-news-20260430',
  imports: [RouterLink],
  templateUrl: './morning-news-20260430.html',
  styleUrl: './morning-news-20260430.scss',
})
export class MorningNews20260430 {
  readonly category = '每日市場晨報';
  readonly sectionPath = '/morning-news';
  readonly title = '美股盤前晨報｜正式預覽版';
  readonly summary =
    '整理美股盤前重點、科技龍頭動向、台股產業連動與當日觀察清單，方便快速建立交易日的市場脈絡。';

  readonly metrics = [
    { label: '報告日期', value: '2026-04-30' },
    { label: '資料範圍', value: '美股盤前 / 台股連動' },
    { label: '閱讀狀態', value: '正式預覽版' },
  ];

  readonly highlights = [
    '四格摘要卡快速標記主要風險、機會與盤前節奏。',
    '市場溫度儀表板集中觀察指數、利率與匯率變化。',
    '七巨頭與台股供應鏈區塊串起跨市場連動。',
  ];
}
