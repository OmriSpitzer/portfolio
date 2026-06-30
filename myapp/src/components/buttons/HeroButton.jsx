/**
 * Hero button component
 */

const HeroButton = ({ label, gotoHref = null }) => {

    /* If no label, return null */
    if (!label) return null;

    return (
        <button
            className="items-center rounded-lg px-6 py-3 text-lg font-semibold text-white transition-colors cursor-pointer duration-300 ease-in-out hover:bg-sky-400 bg-sky-500"
            onClick={() => gotoHref ? window.location.href = gotoHref : null}>
            {label}
        </button>
    );
}

export default HeroButton;