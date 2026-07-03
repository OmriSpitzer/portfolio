/**
 * Panel background component
 */

import { PANEL_UI_MAP } from '../../maps'
import { useInterface } from '../../contexts'

const Panel = ({ children, color='default', className = '' }) => {
    const { isMobile } = useInterface();

    /* Get the color class */
    const colorClass = PANEL_UI_MAP[color] || PANEL_UI_MAP.default;

    return (
        <div className={`${colorClass} rounded-2xl ${className} ${isMobile ? 'px-4 py-2' : 'p-5 '}`}>
            {children}
        </div>
    )
}

export default Panel;