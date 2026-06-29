/**
 * Header button component
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderButton = ({ label, icon, onClick, isExpandLeft = false }) => {
    /* If no label and no icon, return null */
    if (!label && !icon) {
        return null;
    }

    return (
        <div className="group relative h-10 w-10 shrink-0">
            <button
                type="button"
                className={`
                    absolute top-0 flex px-3 h-10 max-w-10 items-center justify-center overflow-hidden
                    whitespace-nowrap rounded-lg border cursor-pointer
                    transition-[max-width,background-color,color,gap,padding] duration-300 ease-in-out
                    hover:text-[var(--color-accent)] group-hover:max-w-48 group-hover:gap-2 group-hover:px-3
                    group-hover:justify-start group-hover:bg-[var(--header-menu-bg)] group-hover:z-20
                    ${isExpandLeft ? 'right-0 flex-row-reverse' : 'left-0'}`}
                style={{
                    borderColor: 'var(--header-button-border)',
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
                {icon && <FontAwesomeIcon icon={icon} className="shrink-0" />}
            </button>
        </div>
    )
}

export default HeaderButton
