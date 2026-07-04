# Omri Spitzer — Portfolio

A single-page personal portfolio built with React 19 and Vite. Content-driven sections, smooth scroll navigation, light/dark theme, and a project carousel — all powered by JSON data you can edit without touching layout code.

*React 19* · *Vite 8* · *Tailwind CSS 4*

## Features

- **Section-based layout** — Hero, About, Skills, Education, Projects, and Contact with scroll-snap navigation
- **Data-driven content** — Profile, skills, education, and projects live in JSON files under `src/data/`
- **Project carousel** — Expandable cards with live demo and repository links
- **Theme toggle** — Light and dark modes with CSS custom properties
- **Responsive design** — Mobile-aware layout and navigation via `InterfaceContext`
- **React Compiler** — Enabled through Vite and Babel for optimized rendering

## Tech Stack

| Layer | Technologies |
| --- | --- |
| UI | React 19, JSX |
| Styling | Tailwind CSS 4, CSS custom properties |
| Icons | Font Awesome (React) |
| Build | Vite 8, `@vitejs/plugin-react` |
| Linting | ESLint 10 (flat config) |
| Fonts | Inter (Google Fonts) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Installation

```bash
cd myapp
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

The production bundle is written to `dist/`. Use `npm run preview` to serve it locally.

### Lint

```bash
npm run lint
```

## Project Structure

```
myapp/
├── public/                  # Static assets (project images, favicon)
├── src/
│   ├── assets/              # Downloadable files (e.g. resume.pdf)
│   ├── components/
│   │   ├── badges/          # Skill badges
│   │   ├── buttons/         # Hero, expand, and action buttons
│   │   ├── carousel/        # Project carousel and cards
│   │   ├── labels/          # Small headers and list labels
│   │   ├── pages/           # Top-level page sections
│   │   ├── panels/          # Panel layout components
│   │   └── sectionUI/       # Section wrapper, title, footer, background
│   ├── contexts/            # React context providers
│   ├── data/                # Portfolio content (JSON)
│   ├── maps/                # Navigation and panel configuration
│   ├── App.jsx              # Root application shell
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and theme tokens
├── index.html
├── vite.config.js
└── eslint.config.js
```

## Customizing Content

All portfolio content is centralized in `src/data/`:

| File | Purpose |
| --- | --- |
| `profile.json` | Name, title, tagline, about text, contact info, social links |
| `skills.json` | Skill categories and items |
| `education.json` | Degrees, institutions, and dates |
| `projects.json` | Project titles, descriptions, tech stack, images, and URLs |

Place project images in `public/` and reference them by filename in `projects.json`.

To add or reorder page sections, edit `src/maps/NAVIGATION_MAP.jsx`. Each entry maps an `id`, anchor `href`, nav `label`, and React `component`.

## Architecture

The app wraps sections in three context providers:

- **`InterfaceProvider`** — Theme (light/dark), mobile breakpoint detection
- **`PortfolioProvider`** — Loads and exposes portfolio data from JSON
- **`NavigationProvider`** — Section order, anchor links, and next-section navigation

`App.jsx` renders the header and maps over `NAVIGATION_MAP` to mount each page section inside `<main>`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Author

**Omri Spitzer** — Junior Software Engineer

- GitHub: [@OmriSpitzer](https://github.com/OmriSpitzer)
- LinkedIn: [OmriSpitzer](https://linkedin.com/in/OmriSpitzer)
- Email: omrisimo1@gmail.com

---

Built with React + Vite · © 2026 Omri Spitzer
