export type Category = 'graphic' | 'information' | 'uiux' | 'others'

export const categories: { id: Category; label: string; en: string }[] = [
  { id: 'graphic', label: '平面设计', en: 'Graphic Design' },
  { id: 'information', label: '信息设计', en: 'Information Design' },
  { id: 'uiux', label: 'UI/UX 设计', en: 'UI/UX Design' },
  { id: 'others', label: '其他', en: 'Others' },
]

export type Project = {
  slug: string
  title: string
  titleEn: string
  category: Category
  year: string
  role: string
  summary: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'verdant-branding',
    title: 'Verdant 品牌视觉系统',
    titleEn: 'Verdant Brand Identity',
    category: 'graphic',
    year: '2025',
    role: 'Brand / Art Direction',
    summary:
      '为一家可持续食品品牌打造的完整视觉识别系统，包含标志、印刷物与包装。A complete identity system for a sustainable food brand.',
    image: '/work/verdant-branding.png',
  },
  {
    slug: 'echo-festival',
    title: 'Echo 音乐节主视觉',
    titleEn: 'Echo Festival Key Visual',
    category: 'graphic',
    year: '2024',
    role: 'Poster / Typography',
    summary:
      '以瑞士排版为基底的音乐节海报系列，强对比黑白配单一暖色。A swiss-typography poster series for a music festival.',
    image: '/work/echo-festival.png',
  },
  {
    slug: 'city-breath',
    title: '城市呼吸 数据图谱',
    titleEn: 'City Breath Data Atlas',
    category: 'information',
    year: '2025',
    role: 'Data Viz / Editorial',
    summary:
      '一份关于城市空气质量的信息设计图谱，用径向图讲述一年的呼吸。An information design atlas about a city breathing over a year.',
    image: '/work/city-breath-data.png',
  },
  {
    slug: 'climate-report',
    title: '气候年报 信息图',
    titleEn: 'Annual Climate Report',
    category: 'information',
    year: '2024',
    role: 'Infographic / Layout',
    summary:
      '为环境机构设计的年度气候报告，将复杂数据转化为可读的编辑版式。Turning complex climate data into a readable editorial report.',
    image: '/work/climate-report.png',
  },
  {
    slug: 'loop-meditation',
    title: 'Loop 冥想 App',
    titleEn: 'Loop Meditation App',
    category: 'uiux',
    year: '2025',
    role: 'Product Design',
    summary:
      '一款主打呼吸练习的冥想应用，界面克制、色调柔和、动效轻盈。A meditation app centered on breathing, calm and gentle.',
    image: '/work/loop-meditation.png',
  },
  {
    slug: 'ferry-dashboard',
    title: 'Ferry 出行 Dashboard',
    titleEn: 'Ferry Transit Dashboard',
    category: 'uiux',
    year: '2024',
    role: 'UX / Systems',
    summary:
      '城市公共出行调度后台，梳理复杂时刻表与地图数据的信息层级。A transit operations dashboard organizing complex schedule data.',
    image: '/work/ferry-dashboard.png',
  },
  {
    slug: 'handmade-book',
    title: '手工书 装帧实验',
    titleEn: 'Handmade Book Binding',
    category: 'others',
    year: '2023',
    role: 'Craft / Bookbinding',
    summary:
      '一组暴露线装的手工书装帧实验，探索纸张、结构与触感。A set of exposed-binding handmade book experiments.',
    image: '/work/handmade-book.png',
  },
  {
    slug: 'type-poster',
    title: 'Type 字体海报',
    titleEn: 'Type Poster Study',
    category: 'others',
    year: '2023',
    role: 'Typography / Experiment',
    summary:
      '把衬线字形拆解到网格里的实验性字体海报。An experimental poster deconstructing serif letterforms on a grid.',
    image: '/work/type-poster.png',
  },
]
