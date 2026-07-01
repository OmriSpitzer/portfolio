import SectionTitle from './SectionTitle'
import SkillBadge from '../badges/SkillBadge'
import { usePortfolio } from '../../contexts/PortfolioContext'
import Section from './Section'
export default function Skills() {
  const { portfolioData } = usePortfolio()
  const { skills } = portfolioData
  if (!skills?.categories?.length) return null

  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          label="Skills"
          title="Technologies & Tools"
          description="The languages, frameworks, and tools I work with."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
