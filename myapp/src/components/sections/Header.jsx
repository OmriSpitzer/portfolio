/**
 * Header section component
 */

import { useEffect, useState } from 'react'
import { useInterface } from '../../contexts'
import NAVIGATION_MAP from '../../maps/NAVIGATION_MAP'
import { faSun, faMoon, faHome, faFile } from '@fortawesome/free-solid-svg-icons'
import { ExpandButton } from '../buttons'

const Header = () => {
  const { theme, toggleTheme } = useInterface()

  /* Scrolled state */
  const [scrolled, setScrolled] = useState(false)

  /* Is dark theme */
  const isDark = theme === 'dark-mode'

  /* Scroll to top */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  /* Use effect to set scrolled state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300 
        ${scrolled ?
          'border-b backdrop-blur-md opacity-90' :
          'border-b border-transparent'
        }`
      }
      style={{
        backgroundColor: scrolled ? '' : 'transparent',
        borderColor: scrolled ? '' : 'transparent',
      }}
    >
      {/* Header content */}
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 py-4">
        {/* Home button */}
        <ExpandButton
          label="Home"
          icon={faHome}
          onClick={scrollToTop}
          isExpandLeft={false}
        />

        {/* Navigation */}
        <nav className="flex items-center gap-5">
          {NAVIGATION_MAP.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium transition-colors hover:bg-gray-500/30 rounded-lg px-3 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle button */}
        <ExpandButton
          label={isDark ? 'Light mode' : 'Dark mode'}
          icon={isDark ? faSun : faMoon}
          onClick={toggleTheme}
          isExpandLeft={true}
        />
      </div>
    </header>
  )
}

export default Header
