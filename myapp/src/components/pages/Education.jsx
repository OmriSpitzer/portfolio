/**
 * Education section - Educational background
 */

import { Section, SectionTitle } from '../sectionUI'
import { usePortfolio, useInterface } from '../../contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Panel, InnerPanel } from '../panels'
import { ListedLabel } from '../labels'

const Education = () => {
  const { portfolioData } = usePortfolio()
  const { isMobile } = useInterface()

  /* Check if the portfolio data is loaded */
  if (!portfolioData?.education?.length) return null

  /* Education data */
  const { education } = portfolioData

  return (
    <Section id="education">
      <div className={`mx-auto max-w-6xl ${isMobile ? 'px-4' : 'px-6'}`}>
        {/* Section title */}
        <SectionTitle
          label="Education"
          title="My Educational Background"
          description="My educational journey and key achievements."
        />

        {/* Education items */}
        <div className={`flex flex-col ${isMobile ? 'gap-4' : 'gap-6'}`}>
          {education.map(({ degree, institution, period, highlights, courses }, index) => {
            const displayHighlights = courses.length > 0
              ? [...highlights, 'Highlighted courses:']
              : highlights

            return (
              <Panel key={'education-' + index} className={`flex flex-col ${isMobile ? 'gap-1' : 'gap-3'}`}>
                {/* Detail Title */}
                <div className={`flex justify-between ${isMobile ? 'flex-col gap-2' : 'flex-row'}`}>
                  {/* Degree */}
                  <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className={`${isMobile ? 'text-md' : 'text-2xl'} tracking-wider`}
                    />
                    <p className={`${isMobile ? 'text-sm' : 'text-2xl'} tracking-widest font-medium`}>{degree}</p>
                  </div>

                  {/* Period */}
                  <p className={`${isMobile ? 'text-md' : 'text-xl'} tracking-wider`} style={{ color: 'var(--color-accent)' }}>{period}</p>
                </div>

                {/* Institution */}
                <p className={`${isMobile ? 'text-md' : 'text-xl'} tracking-wider`} style={{ color: 'var(--color-tertiary)' }}>{institution}</p>

                {/* Highlights */}
                <div className="flex flex-col gap-2">
                  {displayHighlights.map((highlight, highlightIndex) => (
                    <ListedLabel key={'highlight-' + highlightIndex}>
                      <p className={`${isMobile ? 'text-md' : 'text-lg'} tracking-wider font-medium`}>
                        {highlight}
                      </p>
                    </ListedLabel>
                  ))}
                </div>

                {/* Course List */}
                {courses.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, courseIndex) => (
                      <InnerPanel key={'course-' + courseIndex} color='blue'>
                        <p className="text-sm tracking-wider font-medium">{course}</p>
                      </InnerPanel>
                    ))}
                  </div>
                )}
              </Panel>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Education;
