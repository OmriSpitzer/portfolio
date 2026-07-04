/**
 * Expanding hover button component
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInterface } from '../../contexts'

const ExpandButton = ({ label, icon, onClick, isExpandLeft = false }) => {
    const { isMobile } = useInterface()

    /* If no label and no icon, return null */
    if (!label && !icon) {
        return null;
    }

    return (
        <div className="group relative h-10 w-10 shrink-0">
            <button
                type="button"
                className={`
                    ${isMobile ? 'w-6 px-1' : 'max-w-10 px-3'}
                    absolute top-0 flex h-10 items-center justify-center overflow-hidden
                    whitespace-nowrap rounded-lg border cursor-pointer
                    transition-[max-width,background-color,color,gap,padding] duration-300 ease-in-out
                    group-hover:max-w-48 group-hover:gap-2 group-hover:px-3
                    group-hover:justify-start group-hover:z-20
                    ${isExpandLeft ? 'right-0 flex-row-reverse' : 'left-0'}`}
                style={{
                    color: 'var(--color-secondary)',
                }}
                onClick={onClick}
            >
                {label && (
                    <span
                        className="
                            max-w-0 overflow-hidden text-md font-bold opacity-0
                            transition-[max-width,opacity] duration-300 ease-in-out
                            group-hover:max-w-40 group-hover:opacity-100"
                    >
                        {label}
                    </span>
                )}
                {icon && <FontAwesomeIcon icon={icon} className={`shrink-0 ${isMobile ? 'text-xs' : ''}`} />}
            </button>
        </div>
    )
}

export default ExpandButton
