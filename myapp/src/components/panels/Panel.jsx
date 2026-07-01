/**
 * Panel background component
 */

const Panel = ({ children, color='default', className = '' }) => {
    const COLOR_MAP = {
        'blue': 'bg-blue-300/30',
        'green': 'bg-green-300/30',
        'red': 'bg-red-300/30',
        'yellow': 'bg-yellow-300/30',
        'default': 'bg-gray-300/30',
    }

    /* Get the color class */
    const colorClass = COLOR_MAP[color] || COLOR_MAP.default;

    return (
        <div className={`${colorClass} p-5 rounded-2xl ${className}`}>
            {children}
        </div>
    )
}

export default Panel;