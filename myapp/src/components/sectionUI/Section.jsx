/**
 * Section component
 */

import { useInterface, useNavigation } from '../../contexts';
import SectionBackground from './SectionBackground';
import SectionFooter from './SectionFooter';

const Section = ({ id, children }) => {
    const { isMobile } = useInterface();
    const { getNextSection, currentId } = useNavigation();

    /* If no id, return null */
    if (!id) return null;

    return (
        <section
            id={id}
            className={`relative flex min-h-screen overflow-hidden ${isMobile ? 'pt-25' : 'items-center'}`}
        >
            {/* Background */}
            {!isMobile && <SectionBackground id={id} />}

            {/* Content */}
            <div className={`relative z-10 flex min-h-screen w-full flex-col 
                    ${isMobile ? 'items-stretch p-5' : 'items-center p-10'}`}
            >
                <div className={`
                        ${isMobile ? 'justify-start items-start' : 'justify-center items-center flex flex-1 flex-col'}`}
                >
                    <div className={`
                            ${isMobile ? 'mb-4 w-full' : 'w-fit rounded-2xl border border-blue-500 bg-[var(--color-background)] p-4'}`}
                    >
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <SectionFooter next={getNextSection(id)} />
            </div>
        </section>
    );
}

export default Section;