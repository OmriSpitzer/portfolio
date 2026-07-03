/**
 * Mobile section footer - link to the next section
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useInterface } from '../../contexts'

const SectionFooter = ({ next }) => {
  const { isMobile } = useInterface()
  
  /* If no next section, render nothing */
  if (!next) return null

  return (
    <a
      href={next.href}
      className="flex w-full shrink-0 items-center justify-center gap-4 rounded-xl px-4 py-3 pb-8 text-lg font-semibold transition-colors"
      style={{ color: 'var(--color-accent)' }}
    >
      {/* Bouncing arrow icon */}
      <FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />

      {/* Label */}
      <span>{!isMobile && 'Continue to'} "{next.label}" section</span>

      {/* Bouncing arrow icon */}
      <FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />
    </a>
  )
}

export default SectionFooter
