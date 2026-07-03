/**
 * SectionBackground component
 */

import { useInterface } from '../../contexts'
import { useState, useEffect } from 'react'

/* Color map for the section background */
const COLOR_MAP = {
    'dark-mode': {
        color1: 'bg-sky-400/30', // Light Blue
        color2: 'bg-violet-400/30', // Light Violet
    },
    'light-mode': {
        color1: 'bg-sky-500/30', // Dark Blue
        color2: 'bg-violet-500/30', // Dark Violet
    },
}

const SectionBackground = ({ id }) => {
    const { isDark, pageCount, isMobile } = useInterface();

    /* State for the colors */
    const [color1, setColor1] = useState(COLOR_MAP['dark-mode'].color1);
    const [color2, setColor2] = useState(COLOR_MAP['dark-mode'].color2);

    /* Update the colors when the theme changes */
    useEffect(() => {
        if (isDark) {
            setColor1(COLOR_MAP['dark-mode'].color1);
            setColor2(COLOR_MAP['dark-mode'].color2);
        } else {
            setColor1(COLOR_MAP['light-mode'].color1);
            setColor2(COLOR_MAP['light-mode'].color2);
        }
    }, [isDark]);

    /* Get the section index */
    const sectionIndex = pageCount(id);

    /* Check if the section is the main page */
    const isMainPage = sectionIndex === 0;

    return (
        <div className="pointer-events-none absolute inset-0">
            {isMainPage ?
                <>
                    <div className={`absolute rounded-full
                            ${isMobile ?
                            '-left-16 bottom-1/2 h-72 w-72 blur-2xl' :
                            '-left-32 top-1/4 h-128 w-128 blur-3xl'
                        }
                            ${color1}`}
                    />
                    <div
                        className={`absolute rounded-full ${color2} ${isMobile
                            ? '-right-8 top-4/7 h-80 w-80 blur-2xl'
                            : '-right-16 bottom-1/2 h-128 w-128 blur-3xl'
                            }`}
                    />
                </> :
                (sectionIndex % 2 === 0 ?
                    <>
                        <div
                            className={`absolute rounded-full ${color1}
                            ${isMobile
                                    ? '-right-12 top-0 h-56 w-56 blur-2xl'
                                    : '-right-24 top-1/8 h-96 w-96 blur-3xl'
                                }`}
                        />
                        <div
                            className={`absolute rounded-full ${color2}
                            ${isMobile
                                    ? 'left-1/3 top-1/6 h-48 w-48 -translate-x-1/2 translate-y-1/4 blur-2xl'
                                    : 'left-1/4 top-1/8 h-72 w-72 -translate-x-1/3 translate-y-1/4 blur-3xl'
                                }`}
                        />
                        <div
                            className={`absolute rounded-full ${color2}
                            ${isMobile
                                    ? 'right-1/4 top-1/2 h-28 w-28 -translate-y-1/2 blur-xl'
                                    : 'right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 blur-2xl'
                                }`}
                        />
                    </> :
                    <>
                        <div
                            className={`absolute rounded-full ${color1}
                            ${isMobile
                                    ? '-left-12 bottom-1/3 h-56 w-56 -translate-y-1/2 blur-2xl'
                                    : '-left-20 top-1/3 h-80 w-80 -translate-y-1/2 blur-[90px]'
                                }`}
                        />
                        <div
                            className={`absolute rounded-full ${color2}
                            ${isMobile
                                    ? 'right-0 bottom-1/5 h-40 w-40 translate-x-1/6 blur-2xl'
                                    : 'right-0 bottom-1/4 h-56 w-56 translate-x-1/4 blur-3xl'
                                }`}
                        />
                        <div
                            className={`absolute rounded-full ${color1}
                            ${isMobile
                                    ? 'left-3/4 top-12 h-24 w-24 -translate-x-1/2 blur-xl'
                                    : 'left-1/2 top-16 h-32 w-32 -translate-x-1/2 blur-2xl'
                                }`}
                        />
                    </>
                )}
        </div>
    );
};

export default SectionBackground;