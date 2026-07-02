/**
 * Project card component
 */

import { ListedLabel } from '../labels'
import { InnerPanel } from '../panels'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ({ project, onCardClick = () => { } }) => {
  const [isHovering, setIsHovering] = useState(false)

  /* If no project, return null */
  if (!project) return null;

  /* Project data */
  const { title, description, contributions, technologies, image, liveUrl, repoUrl } = project;

  /* Fallback letter when no image is provided*/
  const fallbackLetter = title.charAt(0);

  const toggleHover = () => setIsHovering(!isHovering)

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-2xl hover:shadow-lg 
      hover:shadow-sky-500/50 hover:border-sky-500/50 border border-transparent t
      ransition-all duration-200"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onCardClick}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={fallbackLetter}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center"
            style={{ backgroundColor: 'var(--color-tertiary)' }}
          >
            <span className="text-6xl font-bold">
              {fallbackLetter}
            </span>
          </div>
        )}
      </div>

      <div
        className={`h-full flex flex-col p-3 gap-3 ${isHovering ? 'overflow-y-auto' : 'overflow-hidden'}`}
        style={{ backgroundColor: 'var(--color-background)' }}
      >
        {/* Project Title */}
        {title && (
          <p
          className="text-xl font-bold tracking-widest"
          style={{ color: 'var(--color-accent)' }}
        >
          {title}
        </p>
        )}

        {/* Project Description */}
        {description && (
          <p
          className="text-md tracking-wide"
          style={{ color: 'var(--color-secondary)' }}
        >
          {description}
        </p>
        )}

        {/* Project Contributions */}
        {contributions && (
          <div className="flex flex-wrap gap-2">
          {contributions.map((contribution) => (
            <ListedLabel key={contribution}>
              <p className="text-xs tracking-wider font-medium">
                {contribution}
              </p>
            </ListedLabel>
          ))}
          </div>
        )}

        {/* Project Technologies */}
        <div className="flex flex-wrap gap-3 mt-2">
          {technologies && technologies.map((tech) => (
            <InnerPanel key={tech} color='blue'>
              <p className="text-xs tracking-wider font-semibold">
                {tech}
              </p>
            </InnerPanel>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
              Live Demo
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-sky-500/50 hover:text-sky-400"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xs" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
export default ProjectCard;
