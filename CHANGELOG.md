# Changelog

Notable changes to this portfolio, newest first.

The log follows [Keep a Changelog](https://keepachangelog.com/).

## [2.0.0](#200--unreleased) — Unreleased

Check an item when it ships. The first three are the current plan. The rest are upgrades worth picking from.

- [ ] Docker and Docker-compose the image for running the site
- [ ] Hero page style update
- [ ] Motion particles
- [ ] Open Graph title, description, and preview image for link shares
- [ ] Keyboard controls for the carousel
- [ ] Contact form that actually sends a message

## [1.0.0](#100--2026-06-29) — 2026-06-29

First release. A single-page portfolio: six sections, content in JSON, and a layout you can restyle without rewriting the copy.

### Added

- Scroll-snap page flow: Hero, About, Skills, Education, Projects, and Contact, driven by `NAVIGATION_MAP`
- Content layer in `src/data/` for profile, skills, education, and projects
- Project carousel with expandable cards, live demo links, and repository links
- Light and dark themes through CSS custom properties, with a header toggle
- Fixed header that blurs on scroll, plus a desktop nav that steps aside on small screens
- GSAP drop-in motion that stays off when the visitor prefers reduced motion
- React 19, Vite 8, Tailwind CSS 4, the React Compiler, and ESLint
