import type { Metadata } from 'next'
import { ProjectsGallery } from '@/components/projects-gallery'

export const metadata: Metadata = {
  title: '作品 Projects — 林澜 Lin Lan',
  description:
    '林澜的设计作品，涵盖平面设计、信息设计、UI/UX 设计等方向。',
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      <section className="border-b border-border py-16 md:py-20">
        <p className="text-sm text-muted-foreground">作品 · Projects</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-balance md:text-5xl">
          设计不是装饰，而是把复杂变得清晰。
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          A selection of work across graphic, information and UI/UX design.
          按方向筛选下方作品。
        </p>
      </section>

      <ProjectsGallery />
    </main>
  )
}
