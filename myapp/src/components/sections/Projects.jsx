/**
 * Projects section - Featured work
 */

import SectionTitle from './SectionTitle'
import { usePortfolio } from '../../contexts'
import Section from './Section'
import ProjectCarousel from './ProjectCarousel'

const Projects = () => {
  const { portfolioData } = usePortfolio()

  /* If no projects, return null */
  if (!portfolioData?.projects) return null
  const { projects } = portfolioData

  return (
    <Section id="projects">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section title */}
        <SectionTitle
          label="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills and experience."
        />

        {/* Project carousel */}
        <ProjectCarousel items={projects} />
      </div>
    </Section>
  )
}

export default Projects;
