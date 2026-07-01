/**
 * Small header label component
 */

const SmallHeader = ({ label = 'Default' }) => {

    return (
        <p
            className="mb-2 text-lg font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-accent)', }}
        >
            {label}
        </p>
    );
}

export default SmallHeader;