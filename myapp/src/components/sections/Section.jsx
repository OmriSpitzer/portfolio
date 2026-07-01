/**
 * Section component
 */

import { useInterface } from '../../contexts';

const Section = ({ id, children, isMainPage = false }) => {
    const { isDark, pageCount } = useInterface();

    /* If no id, return null */
    if (!id) return null;

    return (
        <section
            id={id}
            className="relative flex min-h-screen items-center overflow-hidden pt-20"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                {isMainPage ?
                    <>
                        <div className={`absolute -left-32 top-1/4 h-128 w-128 rounded-full ${isDark ? 'bg-sky-400/30' : 'bg-sky-500/30'} blur-3xl`} />
                        <div className={`absolute -right-16 bottom-1/2 h-128 w-128 rounded-full ${isDark ? 'bg-violet-400/30' : 'bg-violet-500/30'} blur-3xl`} />
                    </> :
                    pageCount(id) % 2 === 0 ?
                        <>
                            <div className={`absolute -right-24 top-1/8 h-96 w-96 rounded-full ${isDark ? 'bg-sky-400/35' : 'bg-sky-500/35'} blur-3xl`} />
                            <div className={`absolute left-1/4 top-1/8 h-72 w-72 -translate-x-1/3 translate-y-1/4 rounded-full ${isDark ? 'bg-violet-400/25' : 'bg-violet-500/25'} blur-3xl`} />
                            <div className={`absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full ${isDark ? 'bg-violet-400/20' : 'bg-violet-500/20'} blur-2xl`} />
                        </> :
                        <>
                            <div className={`absolute -left-20 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full ${isDark ? 'bg-sky-400/30' : 'bg-sky-500/30'} blur-[90px]`} />
                            <div className={`absolute right-0 bottom-1/4 h-56 w-56 translate-x-1/4 rounded-full ${isDark ? 'bg-violet-400/30' : 'bg-violet-500/30'} blur-3xl`} />
                            <div className={`absolute left-1/2 top-16 h-32 w-32 -translate-x-1/2 rounded-full ${isDark ? 'bg-sky-400/15' : 'bg-sky-500/15'} blur-2xl`} />
                        </>
                }
            </div>

            {/* Content */}
            <div className="w-full h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </section>
    );
}

export default Section;