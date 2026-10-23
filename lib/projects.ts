export type Category = 'graphic' | 'information' | 'uiux' | 'others'

export const categories: { id: Category; label: string; zh: string }[] = [
  { id: 'graphic', label: 'Graphic Design', zh: '平面设计' },
  { id: 'information', label: 'Information Design', zh: '信息设计' },
  { id: 'uiux', label: 'UI/UX Design', zh: 'UI/UX 设计' },
  { id: 'others', label: 'Others', zh: '其他' },
]

export type Project = {
  slug: string
  title: string
  titleEn: string
  category: Category
  year: string
  role: string
  roleZh: string
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
    roleZh: '品牌 / 艺术指导',
    summary:
      'A complete visual identity system for a sustainable food brand, spanning logo, print collateral and packaging. 为一家可持续食品品牌打造的完整视觉识别系统。',
    image: '/work/verdant-branding.png',
  },
  {
    slug: 'echo-festival',
    title: 'Echo 音乐节主视觉',
    titleEn: 'Echo Festival Key Visual',
    category: 'graphic',
    year: '2024',
    role: 'Poster / Typography',
    roleZh: '海报 / 字体设计',
    summary:
      'A swiss-typography poster series for a music festival, built on high-contrast black and white with a single warm accent. 以瑞士排版为基底的音乐节海报系列。',
    image: '/work/echo-festival.png',
  },
  {
    slug: 'city-breath',
    title: '城市呼吸 数据图谱',
    titleEn: 'City Breath Data Atlas',
    category: 'information',
    year: '2025',
    role: 'Data Viz / Editorial',
    roleZh: '数据可视化 / 编辑设计',
    summary:
      'An information design atlas on urban air quality, telling a year of a city breathing through radial charts. 一份关于城市空气质量的信息设计图谱。',
    image: '/work/city-breath-data.png',
  },
  {
    slug: 'climate-report',
    title: '气候年报 信息图',
    titleEn: 'Annual Climate Report',
    category: 'information',
    year: '2024',
    role: 'Infographic / Layout',
    roleZh: '信息图 / 版式设计',
    summary:
      'An annual climate report for an environmental agency, turning complex data into a readable editorial layout. 为环境机构设计的年度气候报告。',
    image: '/work/climate-report.png',
  },
  {
    slug: 'loop-meditation',
    title: 'Loop 冥想 App',
    titleEn: 'Loop Meditation App',
    category: 'uiux',
    year: '2025',
    role: 'Product Design',
    roleZh: '产品设计',
    summary:
      'A meditation app centered on breathing exercises — restrained UI, soft tones and light motion. 一款主打呼吸练习的冥想应用。',
    image: '/work/loop-meditation.png',
  },
  {
    slug: 'ferry-dashboard',
    title: 'Ferry 出行 Dashboard',
    titleEn: 'Ferry Transit Dashboard',
    category: 'uiux',
    year: '2024',
    role: 'UX / Systems',
    roleZh: '用户体验 / 系统设计',
    summary:
      'A public transit operations dashboard organizing complex schedule and map data into a clear hierarchy. 城市公共出行调度后台。',
    image: '/work/ferry-dashboard.png',
  },
  {
    slug: 'saline-music-repair',
    title: 'Saline 音乐维修应用',
    titleEn: 'Saline Music Repair App',
    category: 'uiux',
    year: '2026',
    role: 'UX/UI Design',
    roleZh: 'UX/UI 设计',
    summary:
      'A mobile service platform that brings instrument repair requests, transparent pricing, real-time status, and pickup logistics into one place. 面向本地乐器维修店的移动服务平台，整合维修申请、价格透明化、进度追踪与取件服务。',
    image: '/work/saline-music-repair/cover.png',
  },
  {
    slug: 'nypd-website-redesign',
    title: 'NYPD 网站改版',
    titleEn: 'NYPD Website Redesign',
    category: 'uiux',
    year: '2025',
    role: 'UX/UI Design',
    roleZh: 'UX/UI 设计',
    summary:
      'A responsive website redesign for New York Pizza Depot, balancing local character, menu discovery, and a clearer ordering journey. 为纽约披萨店打造的响应式网站改版，平衡本地品牌个性、菜单浏览与清晰的下单流程。',
    image: '/work/nypd/responsive-web-full.png',
  },
  {
    slug: 'handmade-book',
    title: '手工书 装帧实验',
    titleEn: 'Handmade Book Binding',
    category: 'others',
    year: '2023',
    role: 'Craft / Bookbinding',
    roleZh: '手作 / 书籍装帧',
    summary:
      'A set of exposed-binding handmade book experiments exploring paper, structure and touch. 一组暴露线装的手工书装帧实验。',
    image: '/work/handmade-book.png',
  },
  {
    slug: 'type-poster',
    title: 'Type 字体海报',
    titleEn: 'Type Poster Study',
    category: 'others',
    year: '2023',
    role: 'Typography / Experiment',
    roleZh: '字体设计 / 实验',
    summary:
      'An experimental poster deconstructing serif letterforms across a grid. 把衬线字形拆解到网格里的实验性字体海报。',
    image: '/work/type-poster.png',
  },
]
