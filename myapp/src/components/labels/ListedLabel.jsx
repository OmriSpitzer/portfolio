/**
 * Listed label component
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const ListedLabel = ({ children }) => {

    return (
        <div className="flex flex-row gap-3 items-center">
            <FontAwesomeIcon
                icon={faSquare}
                className="text-sm tracking-wider"
                style={{ color: 'var(--color-accent)' }}
            />
            {children}
        </div>
    )
}
export default ListedLabel;