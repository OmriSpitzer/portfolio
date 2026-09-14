import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const DEFAULT_DURATION = 2.2
const DEFAULT_STAGGER = 0.6
const DEFAULT_EASE = 'power3.out'
const DEFAULT_Y = -32

/**
 * Drop-in effect hook: targets fall from above, then settle
 */
export function useDropIn({ enabled = true } = {}) {
  const root = useRef(null)

  useGSAP(() => {
    if (!enabled || !root.current) return

    // Check if there are any items
    const items = gsap.utils.toArray('[data-drop]', root.current)
    if (!items.length) return

    const mediaQuery = gsap.matchMedia()

    // Add event listener for no preference
    mediaQuery.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set(items, { autoAlpha: 0, opacity: 0, y: DEFAULT_Y })
      gsap.to(items, {
        autoAlpha: 1,
        opacity: 1,
        y: 0,
        duration: DEFAULT_DURATION,
        stagger: DEFAULT_STAGGER,
        ease: DEFAULT_EASE,
      })
    })

    return () => mediaQuery.revert()
  }, { scope: root, dependencies: [enabled], })

  return root
}

/**
 * Wrap any markup to apply the drop-in. Mark children with data-drop.
 */
export function DropIn({ as: Tag = 'div', className, children, enabled = true }) {
  const ref = useDropIn({ enabled })

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}