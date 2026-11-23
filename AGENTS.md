# Agents

Single-page portfolio in `myapp/`. React 19, Vite, Tailwind 4. No router, no backend, no extra state library.

## Architecture

`main.jsx` mounts `App`. `App` wraps the tree in this order:

1. `InterfaceProvider` — theme (`light-mode` / `dark-mode`) and `isMobile` (< 768px)
2. `PortfolioProvider` — the JSON bundle from `src/data/`
3. `NavigationProvider` — the section list and `getNextSection`

`App` renders `Header`, then one component per entry in `src/maps/NAVIGATION_MAP.jsx`. Each page section uses `Section` (`src/components/sectionUI/`), which owns the snap layout, background, and footer.

Read data with `usePortfolio`, theme and breakpoint with `useInterface`, section order with `useNavigation`. Do not prop-drill these from `App`.

| Path | Owns |
| --- | --- |
| `src/data/*.json` | Profile, skills, education, projects |
| `src/maps/NAVIGATION_MAP.jsx` | Section id, anchor, label, component |
| `src/maps/PANEL_UI_MAP.jsx` | Panel tint classes |
| `src/index.css` | Scroll-snap and theme tokens |
| `src/components/pages/` | One section each |
| `src/components/{badges,buttons,carousel,labels,panels,sectionUI}/` | Shared UI |
| `src/hooks/useDropIn.jsx` | GSAP entrance motion |
| `public/` | Images and other static files |

`src/data/index.js` is the only import of the JSON. Pages read `portfolioData`, they do not import JSON themselves.

## Boundaries

- Copy, links, dates, and project URLs belong in `src/data/`. Do not hardcode them in components.
- Add, remove, or reorder sections only in `NAVIGATION_MAP`. The `id` must match the `Section` `id`. Do not special-case sections inside `App`.
- Stay on in-page anchors. Do not add React Router or a second navigation source.
- Do not add a server, API client, or form backend. Contact actions are `mailto` and `tel` from `profile.json`.
- Theme colors live as tokens on `.light-mode` and `.dark-mode` in `index.css`. Panel tints live in `PANEL_UI_MAP`. Components use those, not new hex values.
- Do not add a context unless theme, portfolio data, or navigation cannot hold the state.
- Repo docs (`README.md`, `CHANGELOG.md`) stay at the root. The Vite app stays in `myapp/`.
