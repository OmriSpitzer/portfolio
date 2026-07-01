/**
 * Skill badge component
 */

import InnerPanel from '../panels/InnerPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faReact, faJs, faNodeJs, faDocker, faFigma, faGit, faHtml5, faCss3, faPython
} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const ICONS = {
  python: faPython,
  javascript: faJs,
  sql: faDatabase,
  c: faCode,
  react: faReact,
  tailwind: faCss3,
  typescript: faCode,
  html: faHtml5,
  css: faCss3,
  node: faNodeJs,
  rest: faExchangeAlt,
  fastapi: faPython,
  flask: faPython,
  git: faGit,
  docker: faDocker,
  figma: faFigma,
  mongodb: faDatabase,
  postgresql: faDatabase,
  mysql: faDatabase,
  default: faCode,
}

const SkillBadge = ({ skill }) => {
  /* Get the icon for the skill */
  const getIcon = (skill) => {
    const oneWordSkill = skill.split(/[\s/.]+/)[0].toLowerCase()
    return ICONS[oneWordSkill] || ICONS.default
  }

  return (
    <InnerPanel>
      <div className="flex flex-row gap-2 items-center font-bold text-lg">
        <FontAwesomeIcon icon={getIcon(skill)} style={{ color: 'var(--color-secondary)' }} />
        <p className="tracking-widest" style={{ color: 'var(--color-secondary)' }}>
          {skill}
        </p>
      </div>
    </InnerPanel>
  )
}

export default SkillBadge;
