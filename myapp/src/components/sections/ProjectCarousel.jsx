/**
 * Project carousel component
 */

import { useRef, useState } from 'react'
import ProjectCard from '../cards/ProjectCard'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ExpandButton } from '../buttons'

/* Visible items shown in the carousel */
const VISIBLE_COUNT = 3

/* Reduction percentages for carousel items */
const HEIGHT_REDUCTION_PERCENTAGE = 30
const WIDTH_REDUCTION_PERCENTAGE = 20

/* Default height and width of the project cards */
const CARD_HEIGHT = 550
const CARD_WIDTH = 350

/* Horizontal distance between carousel slots (side card width + gap) */
const SLOT_STEP = CARD_WIDTH * (1 - WIDTH_REDUCTION_PERCENTAGE / 100) + 24

const ProjectCarousel = ({ items }) => {
    /* Show index array */
    const [showIndexArray, setShowIndexArray] = useState(() =>
        items?.length ? Array.from({ length: items.length }, (_, i) => i) : []
    )

    /* Slide offset */
    const [slideOffset, setSlideOffset] = useState(0)

    /* Enable slide transition */
    const [enableSlideTransition, setEnableSlideTransition] = useState(true)

    /* Is animating reference */
    const isAnimatingRef = useRef(false)
    /* Direction reference */
    const directionRef = useRef(true)

    /* If no items, return null */
    if (!items?.length) return null

    /* Rotate */
    const rotate = (isLeft = true) => {
        /* Check if animating or no items */
        if (isAnimatingRef.current || showIndexArray.length === 0) return

        /* Set animating and direction reference */
        isAnimatingRef.current = true
        directionRef.current = isLeft

        setEnableSlideTransition(true)
        setSlideOffset(isLeft ? -SLOT_STEP : SLOT_STEP)
    }

    /* Handle slide transition end */
    const handleSlideTransitionEnd = (event) => {
        if (event.propertyName !== 'transform' || !isAnimatingRef.current) return

        /* Update show index array */
        setShowIndexArray((prev) => {
            const newShow = [...prev]

            if (directionRef.current) {
                const curr = newShow.shift()
                newShow.push(curr)
            } else {
                const curr = newShow.pop()
                newShow.unshift(curr)
            }

            return newShow
        })

        /* Disable slide transition and reset slide offset */
        setEnableSlideTransition(false)
        setSlideOffset(0)

        /* Request animation frame to enable slide transition and reset animating reference */
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setEnableSlideTransition(true)
                isAnimatingRef.current = false
            })
        })
    }

    return (
        <div className="w-full flex flex-row justify-center items-center gap-6">
            {/* Previous button */}
            <ExpandButton
                label="Previous"
                icon={faChevronLeft}
                onClick={() => rotate(false)}
                isExpandLeft={true}
            />

            {/* Carousel container */}
            <div className="overflow-hidden">
                <div
                    className="flex flex-row gap-6"
                    style={{
                        transform: `translateX(${slideOffset}px)`,
                        transition: enableSlideTransition ? 'transform 300ms ease-in-out' : 'none',
                    }}
                    onTransitionEnd={handleSlideTransitionEnd}
                >
                    {showIndexArray.slice(0, VISIBLE_COUNT).map((projectIndex, index) => {
                        /* Calculate height and width */
                        let height = CARD_HEIGHT
                        let width = CARD_WIDTH

                        /* Check if main card */
                        const isMainCard = index === 1
                        /* If not main card, reduce height and width */
                        if (!isMainCard) {
                            height -= (HEIGHT_REDUCTION_PERCENTAGE / 100) * CARD_HEIGHT
                            width -= (WIDTH_REDUCTION_PERCENTAGE / 100) * CARD_WIDTH
                        }

                        return (
                            <div
                                key={`project-card-${projectIndex}`}
                                className={`w-full max-w-sm transition-all duration-300 ${!isMainCard && 'mt-10'}`}
                                style={{ height: `${height}px`, width: `${width}px` }}
                            >
                                <ProjectCard
                                    project={items[projectIndex]}
                                    onCardClick={() => !isMainCard && rotate(index > 1)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Next button */}
            <ExpandButton
                label="Next"
                icon={faChevronRight}
                onClick={() => rotate(true)}
                isExpandLeft={false}
            />
        </div>
    )
}

export default ProjectCarousel

