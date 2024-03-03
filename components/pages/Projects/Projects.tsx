import { Header } from '@/components/shared/headers/header/header'
import { ProjectCard } from './ProjectCard'

export default async function Projects() {
  return (
    <div className="w-full ">
      <Header title="projects" />
      <ProjectCard />
    </div>
  )
}
