import { Introduction, Newsletter } from '@/components/pages'
import { ProjectCard } from '@/components/pages/Projects/ProjectCard'
import Cursor from '@/components/shared/Cursor/Cursor'

export default function Home() {
  return (
    <main className="desktop:pt-16 tablet:pt-8 mx-auto flex max-w-[700px] flex-col gap-16 px-4 pb-10 pt-6">
      <Cursor />

      <Introduction />
      <ProjectCard />
      <Newsletter />
    </main>
  )
}
