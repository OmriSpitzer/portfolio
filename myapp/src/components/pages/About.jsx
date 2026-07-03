/**
 * About section - Introduction to the portfolio
 */

import { Section, SectionTitle } from '../sectionUI'
import { usePortfolio, useInterface } from '../../contexts'
import { faMapMarkerAlt, faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Panel } from '../panels'
import { SmallHeader } from '../labels'

const About = () => {
  const { portfolioData } = usePortfolio()
  const { isMobile } = useInterface()

  /* Check if the portfolio data is loaded */
  if (!portfolioData.profile) return null

  /* Profile data */
  const { profile } = portfolioData;

  /* Detail list */
  const detail_list = [
    { label: 'Location', value: profile.location, icon: faMapMarkerAlt },
    { label: 'Email (send me an email)', value: profile.email, icon: faEnvelope, href: `mailto:${profile.email}` },
    { label: 'Phone (call me)', value: profile.phone, icon: faPhone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
    { label: 'Role', value: profile.title, icon: faUser },
  ]

  return (
    <Section id="about">
      <div className={`${isMobile ? 'px-4' : 'px-6 max-w-6xl mx-auto'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-6 gap-8'}`}>
          <div className={isMobile ? '' : 'col-span-4'}>
            {/* Header */}
            <SectionTitle
              label="About"
              title="Who I Am"
              description="A brief introduction to my background and what I bring to the table"
            />

            {/* About Me - description */}
            <Panel color='blue'>
              <p className={`tracking-wider ${isMobile ? 'text-md font-semibold' : 'text-xl font-medium'}`} >
                {profile.about}
              </p>
            </Panel>
          </div>

          {/* Details */}
          <Panel className={isMobile ? '' : 'col-span-2'} color='blue'>
            {/* Details header */}
            <SmallHeader label="Details" />

            {/* Details items */}
            <div className={`w-full h-full flex flex-col ${isMobile ? 'gap-2' : 'gap-5'}`}>
              {detail_list.map((detail) => (
                <div key={detail.label} className={`flex ${isMobile ? 'flex-row gap-2' : 'flex-col gap-1'}`}>
                  {/* Detail Title */}
                  <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon
                      icon={detail.icon}
                      className={`${isMobile ? 'text-lg' : 'text-2xl'} tracking-wider`}
                      style={{ color: 'var(--color-tertiary)' }}
                    />
                    {!isMobile && <p
                      className="text-xl tracking-wider"
                      style={{ color: 'var(--color-tertiary)' }}
                    >
                      {detail.label}
                    </p>}
                  </div>

                  {/* Detail Value */}
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className={`${isMobile ? 'text-md' : 'text-xl'} tracking-widest underline hover:text-sky-400`}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className={`${isMobile ? 'text-md' : 'text-xl'} tracking-widest`} style={{ color: 'var(--color)' }}>
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  )
}

export default About;