import Introduction from '@/components/pages/Introduction/Introduction'
import Newsletter from '@/components/pages/Newsletter/Newsletter'
import Projects from '@/components/pages/Projects/Projects'
import Cursor from '@/components/shared/Cursor/Cursor'

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[700px] flex-col gap-16 px-4 pb-10 pt-6 tablet:pt-8 desktop:pt-16">
      <Cursor />

      <Introduction />
      <Projects />
      {/* <Articles /> */}
      <Newsletter />
    </main>
  )
}
