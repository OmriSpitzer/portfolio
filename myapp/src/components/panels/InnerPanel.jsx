/**
 * Inner panel background component
 */

const InnerPanel = ({ children, className = '' }) => {
    return (
        <div className={`bg-gray-400/30 px-3 py-2 rounded-lg ${className}`}>
            {children}
        </div>
    )
}

export default InnerPanel;