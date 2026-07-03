/**
 * Section title component
 */

import { SmallHeader } from '../labels'
import { useInterface } from '../../contexts'

const SectionTitle = ({ label = 'Default', title = 'Default', description = 'Default', className = '' }) => {
  const { isMobile } = useInterface()

  return (
    <div className={`${isMobile ? 'mb-8 text-center' : 'mb-14'} ${className}`}>
      {/* Small header */}
      <SmallHeader label={label} />

      {/* Title */}
      <h2
        className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold tracking-tight`}
        style={{ color: 'var(--color)' }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-3 ${isMobile ? 'text-lg' : 'text-2xl'}`}
          style={{ color: 'var(--color-tertiary)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle;