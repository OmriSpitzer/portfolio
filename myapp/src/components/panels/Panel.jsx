/**
 * Panel background component
 */

import { PANEL_UI_MAP } from '../../maps'

const Panel = ({ children, color='default', className = '' }) => {
    /* Get the color class */
    const colorClass = PANEL_UI_MAP[color] || PANEL_UI_MAP.default;

    return (
        <div className={`${colorClass} p-5 rounded-2xl ${className}`}>
            {children}
        </div>
    )
}

export default Panel;