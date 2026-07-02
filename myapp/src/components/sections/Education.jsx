/**
 * Experience section - Work history
 */

import SectionTitle from './SectionTitle'
import { usePortfolio } from '../../contexts'
import Section from './Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Panel, InnerPanel } from '../panels'
import { ListedLabel } from '../labels'
import { useEffect, useState } from 'react'

const Education = () => {
  const [displayHighlights, setDisplayHighlights] = useState([])
  const { portfolioData } = usePortfolio()

  if (!portfolioData?.education) return null

  /* Education data */
  const { education } = portfolioData
  const { degree, institution, period, highlights, courses } = education

  /* Add courses to highlights if there are any */
  useEffect(() => {
    if (courses.length > 0)
      setDisplayHighlights([...highlights, 'Highlighted courses:'])
  }, [courses, highlights])

  return (
    <Section id="education">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section title */}
        <SectionTitle
          label="Education"
          title="My Educational Background"
          description="My educational journey and key achievements."
        />

        {/* Timeline items */}
        <div>
          <Panel className="flex flex-col gap-3">
            {/* Detail Title */}
            <div className="flex flex-row justify-between">
              {/* Degree */}
              <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-2xl tracking-wider"
                />
                <p className="text-2xl tracking-widest font-medium">{degree}</p>
              </div>

              {/* Period */}
              <p className="text-xl tracking-wider" style={{ color: 'var(--color-accent)' }}>{period}</p>
            </div>

            {/* Institution */}
            <p className="text-xl tracking-wider" style={{ color: 'var(--color-tertiary)' }}>{institution}</p>

            {/* Highlights */}
            <div className="flex flex-col gap-2">
              {displayHighlights.map((highlight, index) => (
                <ListedLabel key={'highlight-' + index}>
                  <p className="text-lg tracking-wider font-medium">
                    {highlight}
                  </p>
                </ListedLabel>
              ))}
            </div>

            {/* Course List */}
            {courses.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <InnerPanel key={'course-' + index} color='blue'>
                    <p className="text-sm tracking-wider font-medium">{course}</p>
                  </InnerPanel>
                ))}
              </div>
            )}
          </Panel>
        </div>
      </div>
    </Section >
  )
}

export default Education;