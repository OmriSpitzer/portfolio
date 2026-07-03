/**
 * Skills section - Technologies & Tools
 */

import { Section, SectionTitle } from '../sectionUI'
import SkillBadge from '../badges/SkillBadge'
import { usePortfolio, useInterface } from '../../contexts'
import { Panel } from '../panels'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faWrench, faLanguage } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const { portfolioData } = usePortfolio()
  const { isMobile } = useInterface()

  /* Check if the portfolio data is loaded */
  if (!portfolioData?.skills) return null

  /* Skills data */
  const { skills } = portfolioData

  /* Get the UI info for the skill */
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
      <div className={`mx-auto max-w-6xl ${isMobile ? 'px-4' : ''}`}>
        {/* Header */}
        <SectionTitle
          label="Skills"
          title="Technologies & Tools"
          description="The languages, frameworks, and tools I work with."
        />

        {/* Skills categories */}
        <div className={`w-full flex flex-col ${isMobile ? 'gap-2' : 'gap-5'}`}>
          {skills.map((skill) => {
            const skillUI = getUIInfo(skill.id);

            return (
              <Panel key={skill.id} color={skillUI.color} className="flex-1">
                {/* Category name */}
                <div className={`flex flex-row gap-2 items-center ${isMobile ? 'mb-2' : 'mb-4'}`}>
                  <FontAwesomeIcon
                    icon={skillUI.icon}
                    className={`${isMobile ? 'text-lg' : 'text-xl'}`}
                  />
                  <p className={`${isMobile ? 'text-lg' : 'text-2xl'} tracking-widest font-medium`}>
                    {skill.name}
                  </p>
                </div>

                {/* Category skills */}
                <div className={`flex flex-wrap ${isMobile ? 'gap-2' : 'gap-4'}`}>
                  {skill.skills.map((skill) => (
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
