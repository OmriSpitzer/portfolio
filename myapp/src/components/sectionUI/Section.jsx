/**
 * Section component
 */

import { useInterface, useNavigation } from '../../contexts';
import SectionBackground from './SectionBackground';
import SectionFooter from './SectionFooter';

const Section = ({ id, children }) => {
    const { isMobile } = useInterface();
    const { getNextSection } = useNavigation();

    /* If no id, return null */
    if (!id) return null;

    return (
        <section
            id={id}
            className={`relative flex min-h-screen overflow-hidden ${isMobile ? 'pt-25' : 'items-center'}`}
        >
            {/* Background */}
            <SectionBackground id={id} />

            {/* Content */}
            <div className={`w-full flex flex-col z-50
                    ${isMobile ? 'px-6 items-start' : 'items-center min-h-screen'}`}
            >
                <div className={`flex-1 flex flex-col
                        ${isMobile ? 'justify-start items-start mb-4' : 'justify-center items-center'}`}
                >
                    {children}
                </div>

                {/* Footer */}
                <SectionFooter next={getNextSection(id)} />
            </div>
        </section>
    );
}

export default Section;