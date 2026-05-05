import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

type ReportDetailModel = {
  category: string;
  sectionPath: string;
  title: string;
  date: string;
  summary: string;
  highlights: string[];
  metrics: Array<{ label: string; value: string }>;
};

const REPORTS: Record<string, ReportDetailModel> = {
  'morning-news/2026-04-30': {
    category: '每日市場晨報',
    sectionPath: '/morning-news',
    title: '美股盤前晨報｜正式預覽版',
    date: '2026-04-30',
    summary:
      '整理美股盤前重點、科技龍頭動向、台股產業連動與當日觀察清單，方便快速建立交易日的市場脈絡。',
    highlights: [
      '四格摘要卡快速標記主要風險、機會與盤前節奏。',
      '市場溫度儀表板集中觀察指數、利率與匯率變化。',
      '七巨頭與台股供應鏈區塊串起跨市場連動。',
    ],
    metrics: [
      { label: '報告日期', value: '2026-04-30' },
      { label: '資料範圍', value: '美股盤前 / 台股連動' },
      { label: '閱讀狀態', value: '正式預覽版' },
    ],
  },
  'portfolio/2026-05-01-combined': {
    category: '庫存分析',
    sectionPath: '/portfolio',
    title: '最新台美股合併總庫存頁',
    date: '2026-05-01',
    summary: '整合台股與美股持倉，將整體庫存、水位分布、價值區與升溫區放在同一個檢視流程中。',
    highlights: [
      '統一檢視不同市場持倉，避免分散在多份靜態頁面。',
      '以風險、評價與後續布局順序作為主要閱讀軸線。',
      '適合作為每日或每週調整庫存前的總覽入口。',
    ],
    metrics: [
      { label: '報告日期', value: '2026-05-01' },
      { label: '市場範圍', value: '台股 / 美股' },
      { label: '檢視重點', value: '庫存結構與布局順序' },
    ],
  },
  'monthly-eps/2026-04-30': {
    category: '每月金控 EPS',
    sectionPath: '/monthly-eps',
    title: '每月金控 EPS 追蹤',
    date: '2026-04-30',
    summary: '追蹤主要金控每月 EPS 表現，將核心公司、趨勢變化與後續觀察重點整理成單一頁面。',
    highlights: [
      '聚焦凱基金、富邦金、兆豐金三大追蹤區塊。',
      '以月度 EPS 變化辨識金融股基本面節奏。',
      '保留後續更新時可延伸的路由與頁面結構。',
    ],
    metrics: [
      { label: '報告日期', value: '2026-04-30' },
      { label: '追蹤標的', value: '金控股' },
      { label: '更新頻率', value: '每月' },
    ],
  },
  'stocks/2330-2026-04-30': {
    category: '個股專頁',
    sectionPath: '/stocks',
    title: '台積電 (2330) 個股專頁',
    date: '2026-04-30',
    summary: '彙整台積電基本面、營收資料、產業趨勢、投資判讀與風險辨識，作為個股研究入口。',
    highlights: [
      '以基本面和產業趨勢建立個股主軸。',
      '搭配營收數據觀察短中期動能。',
      '將投資判讀與風險辨識放在同一頁，降低切換成本。',
    ],
    metrics: [
      { label: '股票代號', value: '2330' },
      { label: '公司', value: '台積電' },
      { label: '報告日期', value: '2026-04-30' },
    ],
  },
  'stocks/2313-2026-04-30': {
    category: '個股專頁',
    sectionPath: '/stocks',
    title: '華通 (2313) 個股專頁',
    date: '2026-04-30',
    summary: '彙整華通基本面、營收資料、產業趨勢、投資判讀與風險辨識，提供個股追蹤的穩定入口。',
    highlights: [
      '集中呈現公司基本面與營收節奏。',
      '保留產業趨勢與風險項目，方便後續擴充。',
      '透過 router 導頁，GitHub Pages 上點擊不會離開 Angular app。',
    ],
    metrics: [
      { label: '股票代號', value: '2313' },
      { label: '公司', value: '華通' },
      { label: '報告日期', value: '2026-04-30' },
    ],
  },
};

@Component({
  selector: 'app-report-detail',
  imports: [RouterLink],
  templateUrl: './report-detail.html',
  styleUrl: './report-detail.scss',
})
export class ReportDetail {
  private readonly route = inject(ActivatedRoute);

  private readonly routeKey = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const routePath = this.route.snapshot.routeConfig?.path ?? '';
        const sectionPath = routePath.split('/:slug')[0];

        return `${sectionPath}/${params.get('slug') ?? ''}`;
      }),
    ),
    { initialValue: '' },
  );

  readonly report = computed(() => REPORTS[this.routeKey()] ?? null);
}
