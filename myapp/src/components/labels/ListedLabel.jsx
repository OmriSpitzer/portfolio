/**
 * Listed label component
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { useInterface } from '../../contexts'

const ListedLabel = ({ children }) => {
    const { isMobile } = useInterface()

    return (
        <div className={`flex flex-row ${isMobile ? 'gap-2' : 'gap-3'} items-center`}>
            <FontAwesomeIcon
                icon={faSquare}
                className={`${isMobile ? 'text-[10px]' : 'text-sm'} tracking-wider`}
                style={{ color: 'var(--color-accent)' }}
            />
            {children}
        </div>
    )
}
export default ListedLabel;