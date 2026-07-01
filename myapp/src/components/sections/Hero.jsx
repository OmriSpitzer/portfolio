/**
 * Hero section - Main section of the portfolio
 */

import { usePortfolio } from '../../contexts'
import { HeroButton } from '../buttons'
import { SmallHeader } from '../labels'
import Section from './Section'

export default function Hero() {
  const { portfolioData } = usePortfolio();

  /* If no profile, return null */
  if (!portfolioData.profile) return null

  /* Profile data */
  const { profile } = portfolioData;

  return (
    <Section id="hero" isMainPage={true}>
        <div className="text-left">
          {/* Header */}
          <SmallHeader label="Portfolio" />

          {/* Name */}
          <h1
            className="text-6xl font-bold leading-tight tracking-tight"
            style={{ color: 'var(--color)' }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          {/* Title */}
          <p
            className="mt-4 text-2xl font-medium"
            style={{ color: 'var(--color-secondary)' }}
          >
            {profile.title}
          </p>

          {/* Tagline */}
          <p
            className="mt-2 text-lg font-semibold"
            style={{ color: 'var(--color-tertiary)' }}
          >
            {profile.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Projects button */}
            <HeroButton label="View Projects" gotoHref="#projects" />

            {/* Resume button */}
            <HeroButton label="Download Resume" />

            {/* Contact button */}
            <HeroButton label="Get in Touch" gotoHref="#contact" />
          </div>
        </div>
    </Section>
  )
}
