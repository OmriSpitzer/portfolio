/**
 * Project carousel component
 */

import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ExpandButton } from '../buttons'
import { useInterface } from '../../contexts'

/* Visible items shown in the carousel */
const VISIBLE_COUNT = 3
const MOBILE_VISIBLE_COUNT = 1

/* Reduction percentages for carousel items */
const HEIGHT_REDUCTION_PERCENTAGE = 30
const WIDTH_REDUCTION_PERCENTAGE = 20

/* Default height and width of the project cards */
const CARD_HEIGHT = 550
const CARD_WIDTH = 350

/* Mobile button position */
const MOBILE_CARD_HEIGHT = 500
const MOBILE_CARD_WIDTH = 250

/* Minimum horizontal travel (px) to register a swipe */
const SWIPE_THRESHOLD = 50

/* Horizontal distance between carousel slots (side card width + gap) */
const SLOT_STEP = CARD_WIDTH * (1 - WIDTH_REDUCTION_PERCENTAGE / 100) + 24

const ProjectCarousel = ({ items }) => {
    const { isMobile } = useInterface()

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
    /* Touch start x position reference */
    const touchStartXRef = useRef(null)

    /* If no items, return null */
    if (!items?.length) return null

    /* Mobile card width fits the viewport, capped at the desktop width */
    const mobileCardWidth = isMobile ? Math.min(window.innerWidth - 48, MOBILE_CARD_WIDTH) : CARD_WIDTH

    /* Number of visible cards and per-slide travel distance depend on the layout */
    const visibleCount = isMobile ? MOBILE_VISIBLE_COUNT : VISIBLE_COUNT
    const slotStep = isMobile ? mobileCardWidth + 24 : SLOT_STEP

    /* Index of the main (fully sized) card in the visible window */
    const mainCardIndex = isMobile ? 0 : 1

    /* Rotate */
    const rotate = (isLeft = true) => {
        /* Check if animating or no items */
        if (isAnimatingRef.current || showIndexArray.length === 0) return

        /* Set animating and direction reference */
        isAnimatingRef.current = true
        directionRef.current = isLeft

        setEnableSlideTransition(true)
        setSlideOffset(isLeft ? -slotStep : slotStep)
    }

    /* Handle touch start */
    const handleTouchStart = (event) => {
        touchStartXRef.current = event.touches[0].clientX
    }

    /* Handle touch end - swipe left goes to next, swipe right goes to previous */
    const handleTouchEnd = (event) => {
        if (touchStartXRef.current === null) return

        const deltaX = event.changedTouches[0].clientX - touchStartXRef.current
        touchStartXRef.current = null

        if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
        rotate(deltaX < 0)
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
        <div className={`w-full h-full flex flex-row justify-center items-center ${isMobile ? 'gap-2' : 'gap-6'}`}>
            {/* Previous button */}
            <ExpandButton
                label="Previous"
                icon={faChevronLeft}
                onClick={() => rotate(false)}
                isExpandLeft={true}
            />

            {/* Carousel container */}
            <div
                className="overflow-hidden"
                onTouchStart={isMobile ? handleTouchStart : undefined}
                onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
                <div
                    className="flex flex-row gap-6"
                    style={{
                        transform: `translateX(${slideOffset}px)`,
                        transition: enableSlideTransition ? 'transform 300ms ease-in-out' : 'none',
                    }}
                    onTransitionEnd={handleSlideTransitionEnd}
                >
                    {showIndexArray.slice(0, visibleCount).map((projectIndex, index) => {
                        /* Calculate height and width */
                        let height = isMobile ? MOBILE_CARD_HEIGHT : CARD_HEIGHT
                        let width = isMobile ? mobileCardWidth : CARD_WIDTH

                        /* Check if main card */
                        const isMainCard = index === mainCardIndex
                        /* If not main card, reduce height and width (desktop side cards only) */
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
                                    onCardClick={() => !isMobile && !isMainCard && rotate(index > 1)}
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
