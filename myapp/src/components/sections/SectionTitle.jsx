/**
 * Section title component
 */

import { SmallHeader } from '../labels'

const SectionTitle = ({ label = 'Default', title = 'Default', description = 'Default' }) => {
  return (
    <div className="mb-10 md:mb-14">
      {/* Small header */}
      <SmallHeader label={label} />

      {/* Title */}
      <h2
        className="text-5xl font-bold tracking-tight"
        style={{ color: 'var(--color)' }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="mt-3 text-2xl"
          style={{ color: 'var(--color-tertiary)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle;