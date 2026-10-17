import type { Metadata } from 'next'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Localized } from '@/components/localized'

export const metadata: Metadata = {
  title: 'Projects — Qier Long',
  description:
    'Qier Long’s design work across graphic, information, and UI/UX design.',
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      <section className="border-b border-border py-16 md:py-20">
        <p className="text-sm text-muted-foreground">
          <Localized en="Projects" zh="作品" />
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-balance md:text-5xl">
          <Localized
            en="Design is not decoration — it makes the complex clear."
            zh="设计并非装饰，而是让复杂变得清晰。"
          />
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          <Localized
            en="A selection of work across graphic, information and UI/UX design."
            zh="涵盖平面设计、信息设计与 UI/UX 设计的作品选集。"
          />
        </p>
      </section>

      <ProjectsGallery />
    </main>
  )
}
