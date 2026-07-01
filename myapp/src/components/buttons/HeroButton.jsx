/**
 * Hero button component
 */

import resume from '../../assets/resume.pdf';

const HeroButton = ({ label, gotoHref = null, isResume = false }) => {

    /* If no label, return null */
    if (!label) return null;

    const handleClick = () => {
        isResume ?
            window.open(resume, '_blank') :
            gotoHref ? window.location.href = gotoHref : null;
    }
    return (
        <button
            className="items-center rounded-lg px-6 py-3 text-lg font-semibold text-white transition-colors cursor-pointer duration-300 ease-in-out hover:bg-sky-400 bg-sky-500"
            onClick={handleClick}>
            {label}
        </button>
    );
}

export default HeroButton;