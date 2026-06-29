import SectionTitle from '../SectionTitle'
import ProjectCard from '../cards/ProjectCard'
import { usePortfolio } from '../../contexts/PortfolioContext'

export default function Projects() {
  const { portfolioData } = usePortfolio()
  const { projects } = portfolioData
  if (!projects?.items?.length) return null

  return (
    <section id="projects" className="scroll-mt-20 bg-slate-900/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          label="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills and experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
