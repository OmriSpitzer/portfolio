/**
 * Skills section - Technologies & Tools
 */

import SectionTitle from './SectionTitle'
import Section from './Section'
import SkillBadge from '../badges/SkillBadge'
import { usePortfolio } from '../../contexts'
import Panel from '../panels/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faWrench, faLanguage } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const { portfolioData } = usePortfolio()
  if (!portfolioData?.skills?.categories?.length) return null

  /* Skills data */
  const { categories } = portfolioData.skills;

  const getUIInfo = (id) => {
    switch (id) {
      case 'languages':
        return { icon: faLanguage, color: 'blue' }
      case 'frontend':
        return { icon: faCode, color: 'green' }
      case 'backend':
        return { icon: faServer, color: 'yellow' }
      case 'other':
        return { icon: faWrench, color: 'red' }
      default:
        return { icon: null, color: 'gray' }
    }
  }
  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <SectionTitle
          label="Skills"
          title="Technologies & Tools"
          description="The languages, frameworks, and tools I work with."
        />

        {/* Skills categories */}
        <div className="w-full flex flex-col gap-5">
          {categories.map((category) => {
            const categoryUI = getUIInfo(category.id);

            return (
              <Panel key={category.id} color={categoryUI.color} className="flex-1">
                {/* Category name */}
                <div className="flex flex-row gap-2 items-center mb-4">
                  <FontAwesomeIcon
                    icon={categoryUI.icon}
                    className="text-xl"
                  />
                  <p className="text-2xl tracking-widest font-medium">
                    {category.name}
                  </p>
                </div>

                {/* Category skills */}
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </Panel>
            );
          })}
        </div>
      </div>
    </Section>
  )
}

export default Skills;
