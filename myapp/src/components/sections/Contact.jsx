/**
 * Contact section
 */

import SectionTitle from './SectionTitle'
import { usePortfolio } from '../../contexts'
import Section from './Section'
import { Panel } from '../panels'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const { portfolioData } = usePortfolio()
  if (!portfolioData?.profile) return null

  /* Get profile data */
  const { profile } = portfolioData

  /* Contact channels */
  const channels = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: faEnvelope,
    },
    {
      label: 'GitHub',
      value: profile.social?.github,
      href: profile.social?.github,
      icon: faGithub,
    },
    {
      label: 'LinkedIn',
      value: profile.social?.linkedin,
      href: profile.social?.linkedin,
      icon: faLinkedin,
    },
  ]

  return (
    <Section id="contact">
      {/* Section title */}
      <SectionTitle
        label="Contact"
        title="Let's Connect"
        description="Interested in working together? Reach out — I'd love to hear from you."
      />

      {/* Contact channels */}
      <div className="grid grid-cols-3 gap-8">
        {channels.map(({ label, value, href, icon }) => (
          <a
            key={label.toLowerCase()}
            href={href}
            target={label.toLowerCase() === 'email' ? undefined : '_blank'}
            rel={label.toLowerCase() === 'email' ? undefined : 'noopener noreferrer'}
            className="group"
          >
            <Panel
              className="flex h-full flex-col items-center gap-3 text-center 
                transition-all duration-300 group-hover:-translate-y-4"
              color="blue"
            >
              {/* Icon */}
              <FontAwesomeIcon
                icon={icon}
                className="text-4xl"
                style={{ color: 'var(--color-accent)' }}
              />

              {/* Label */}
              <span
                className="text-lg uppercase tracking-widest font-semibold"
              >
                {label}
              </span>

              {/* Contact value */}
              <span
                className="text-sm font-semibold tracking-widest"
                style={{ color: 'var(--color-secondary)' }}
              >
                {value}
              </span>
            </Panel>
          </a>
        ))}
      </div>
    </Section>
  )
}

export default Contact;