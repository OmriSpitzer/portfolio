/**
 * About section - Introduction to the portfolio
 */

import SectionTitle from './SectionTitle'
import { usePortfolio } from '../../contexts'
import Section from './Section'
import { faMapMarkerAlt, faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const { portfolioData } = usePortfolio()
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-4">
            {/* Header */}
            <SectionTitle
              label="About"
              title="Who I Am"
              description="A brief introduction to my background and what I bring to the table"
            />

            {/* About Me - description */}
            <p
              className="text-xl font-medium tracking-wider bg-gray-300/30 p-5 rounded-2xl"
              style={{ color: 'var(--color-tertiary)' }}
            >
              {profile.about}
            </p>
          </div>

          {/* Details */}
          <div className="bg-gray-300/30 p-5 rounded-2xl col-span-2">
            {/* Details header */}
            <p className="mb-4 text-lg font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-accent)' }}>
              Details
            </p>

            {/* Details items */}
            <div className="w-full h-full flex flex-col gap-5">
              {detail_list.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1">
                  {/* Detail Title */}
                  <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon
                      icon={detail.icon}
                      className="text-2xl tracking-wider"
                      style={{ color: 'var(--color-tertiary)' }}
                    />
                    <p className="text-xl tracking-wider" style={{ color: 'var(--color-tertiary)' }}>{detail.label}</p>
                  </div>

                  {/* Detail Value */}
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-xl tracking-widest underline transition-colors duration-300 hover:text-sky-400"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-xl tracking-widest" style={{ color: 'var(--color)' }}>
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About;