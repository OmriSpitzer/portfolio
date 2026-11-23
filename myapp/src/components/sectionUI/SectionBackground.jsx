/**
 * SectionBackground component
 * Drifting particles with fading trails, one canvas per section.
 */

import { useEffect, useRef } from 'react'
import { useInterface } from '../../contexts'

/* Globals */
const TRAIL_LENGTH = 40        // Max trail length
const PARTICLE_SIZE = 3        // Particle size
const TRAIL_SIZE = 5           // Trail size
const SPEED = 0.9              // Particle speed
const PARTICLE_COUNT = {       // Particle count
    mobile: 22,
    pc: 100,
}
const COLOR_PRIMARY = { r: 125, g: 211, b: 252 }   // light blue
const COLOR_SECONDARY = { r: 196, g: 181, b: 253 } // light violet

const SectionBackground = ({ id }) => {
    const { isMobile } = useInterface()
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        const host = canvas.parentElement
        const section = canvas.closest('section')
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const seed = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0)

        let width = 0
        let height = 0
        let frame = 0
        let visible = false
        const particles = []
        const count = PARTICLE_COUNT[isMobile ? 'mobile' : 'pc']

        const makeParticle = (index) => {
            const angle = ((seed * 17 + index * 47) % 360) * (Math.PI / 180)
            return {
                x: ((index * 97 + seed) % 100) / 100,
                y: ((index * 53 + seed) % 100) / 100,
                vx: Math.cos(angle) * SPEED,
                vy: Math.sin(angle) * SPEED,
                color: index % 2 === 0 ? COLOR_PRIMARY : COLOR_SECONDARY,
                history: [],
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            for (const particle of particles) {
                const { r, g, b } = particle.color

                if (!reduced && visible) {
                    particle.x += particle.vx
                    particle.y += particle.vy
                    if (particle.x < 0 || particle.x > width) particle.vx *= -1
                    if (particle.y < 0 || particle.y > height) particle.vy *= -1
                    particle.x = Math.min(width, Math.max(0, particle.x))
                    particle.y = Math.min(height, Math.max(0, particle.y))
                    particle.history.push({ x: particle.x, y: particle.y })
                    if (particle.history.length > TRAIL_LENGTH) particle.history.shift()
                }

                for (let index = 1; index < particle.history.length; index += 1) {
                    const from = particle.history[index - 1]
                    const to = particle.history[index]
                    ctx.beginPath()
                    ctx.moveTo(from.x, from.y)
                    ctx.lineTo(to.x, to.y)
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(index / TRAIL_LENGTH) * 0.7})`
                    ctx.lineWidth = TRAIL_SIZE
                    ctx.stroke()
                }

                ctx.beginPath()
                ctx.arc(particle.x, particle.y, PARTICLE_SIZE, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.95)`
                ctx.fill()
            }
        }

        const resize = () => {
            const rect = host.getBoundingClientRect()
            const nextWidth = rect.width
            const nextHeight = rect.height
            if (nextWidth < 1 || nextHeight < 1) return

            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            canvas.width = Math.floor(nextWidth * dpr)
            canvas.height = Math.floor(nextHeight * dpr)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

            if (particles.length === 0) {
                for (let index = 0; index < count; index += 1) {
                    const particle = makeParticle(index)
                    particle.x *= nextWidth
                    particle.y *= nextHeight
                    particles.push(particle)
                }
            } else if (width > 0 && height > 0) {
                const scaleX = nextWidth / width
                const scaleY = nextHeight / height
                for (const particle of particles) {
                    particle.x *= scaleX
                    particle.y *= scaleY
                    for (const point of particle.history) {
                        point.x *= scaleX
                        point.y *= scaleY
                    }
                }
            }

            width = nextWidth
            height = nextHeight
            if (reduced || !visible) draw()
        }

        const loop = () => {
            if (!visible) return
            draw()
            frame = requestAnimationFrame(loop)
        }

        resize()

        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(host)

        const visibility = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting
            if (!visible || reduced) return
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(loop)
        })
        if (section) visibility.observe(section)

        return () => {
            cancelAnimationFrame(frame)
            resizeObserver.disconnect()
            visibility.disconnect()
        }
    }, [id, isMobile])

    return (
        <div className="pointer-events-none absolute inset-0">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full"
            />
        </div>
    )
}

export default SectionBackground
