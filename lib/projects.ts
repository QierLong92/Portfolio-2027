export type Category =
  | 'graphic'
  | 'experience'
  | 'information'
  | 'uiux'

export const categories: { id: Category; label: string; zh: string }[] = [
  { id: 'experience', label: 'Experience Design', zh: '体验设计' },
  { id: 'graphic', label: 'Graphic Design', zh: '平面设计' },
  { id: 'information', label: 'Information Design', zh: '信息设计' },
  { id: 'uiux', label: 'UI/UX Design', zh: 'UI/UX 设计' },
]

export type Project = {
  slug: string
  title: string
  titleEn: string
  category: Category | Category[]
  year: string
  role: string
  roleZh: string
  summary: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'kelsey-museum',
    title: 'Kelsey Dex',
    titleEn: 'Kelsey Dex',
    category: ['uiux', 'experience'],
    year: '2026',
    role: 'UX/UI & Experience Design',
    roleZh: 'UX/UI 与体验设计',
    summary:
      'An AR museum artifact Pokédex that turns Roman history into a collection-driven adventure.',
    image: '/work/kelsey-museum/frame-2.png',
  },
  {
    slug: 'umbrella-manufacturing-process',
    title: 'Umbrella Manufacturing Process',
    titleEn: 'Umbrella Manufacturing Process',
    category: ['graphic', 'information'],
    year: '2026',
    role: 'Graphic / Information Design',
    roleZh: '平面 / 信息设计',
    summary:
      'An illustrated guide that makes the hidden sequence, components, and assembly logic of umbrella manufacturing easy to follow.',
    image: '/work/umbrella-manufacturing/umbrella-process-poster.jpg',
  },
  {
    slug: 'vibrant-design',
    title: 'Vibrant: The Third Place',
    titleEn: 'Vibrant: The Third Place',
    category: ['experience', 'graphic'],
    year: '2024',
    role: 'Experience / Graphic Design',
    roleZh: '体验 / 平面设计',
    summary:
      'An interactive public-transit campaign that uses posters, brochures, and station displays to make body language and shared space more visible.',
    image: '/work/vibrant/ad-in-context.png',
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
      'A mobile service platform that brings instrument repair requests, transparent pricing, real-time status, and pickup logistics into one place.',
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
      'A responsive website redesign for New York Pizza Depot, balancing local character, menu discovery, and a clearer ordering journey.',
    image: '/work/nypd/mock-up1.png',
  },
]
