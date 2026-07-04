/**
 * Projects section - Featured work
 */

import { Section, SectionTitle } from '../sectionUI'
import { usePortfolio, useInterface } from '../../contexts'
import { ProjectCarousel } from '../carousel'

const Projects = () => {
  const { portfolioData } = usePortfolio()
  const { isMobile } = useInterface()

  /* If no projects, return null */
  if (!portfolioData?.projects) return null
  const { projects } = portfolioData

  return (
    <Section id="projects">
      <div className={`mx-auto max-w-6xl ${isMobile ? 'px-4 flex flex-col' : 'px-6'}`}>
        {/* Section title */}
        <SectionTitle
          label="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills and experience."
          className={isMobile ? 'mb-0' : ''}
        />

        {/* Project carousel */}
        <ProjectCarousel items={projects} />
      </div>
    </Section>
  )
}

export default Projects;
