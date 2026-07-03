/**
 * Inner panel background component
 */

import { PANEL_UI_MAP } from '../../maps'
import { useInterface } from '../../contexts'

const InnerPanel = ({ children, className = '', color = 'default' }) => {
    const colorClass = PANEL_UI_MAP[color] || PANEL_UI_MAP.default;
    const { isMobile } = useInterface();
    
    return (
        <div className={`${colorClass} ${isMobile ? 'px-2 py-1' : 'px-3 py-2'} rounded-lg ${className}`}>
            {children}
        </div>
    )
}

export default InnerPanel;