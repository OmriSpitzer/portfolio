/**
 * Inner panel background component
 */

import { PANEL_UI_MAP } from '../../maps'

const InnerPanel = ({ children, className = '', color = 'default' }) => {
    const colorClass = PANEL_UI_MAP[color] || PANEL_UI_MAP.default;
    
    return (
        <div className={`${colorClass} px-3 py-2 rounded-lg ${className}`}>
            {children}
        </div>
    )
}

export default InnerPanel;