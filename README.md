# Omri Spitzer

Personal portfolio. One page, six sections, content in JSON.

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white) ![Version](https://img.shields.io/badge/version-1.0.0-111111)

Edit the JSON. The layout stays put.

## Start

Requires Node.js 18 or later.

```bash
cd myapp
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production bundle in `dist/` |
| `npm run preview` | Serve that bundle locally |
| `npm run lint` | ESLint |

## On the page

Hero, About, Skills, Education, Projects, Contact. Scroll-snap between them.

- **Copy lives in JSON** under `myapp/src/data/`. Profile, skills, education, and projects.
- **Projects** are a carousel of expandable cards with a live demo and a repository link.
- **Theme** is light or dark, stored as CSS custom properties and toggled from the header.
- **Small screens** drop the desktop nav and tighten the layout through `InterfaceContext`.
- **Motion** is a GSAP drop-in that skips itself when reduced motion is on.
- **Rendering** goes through the React Compiler, wired in Vite.

## Stack

| | |
| --- | --- |
| UI | React 19 |
| Style | Tailwind CSS 4, CSS custom properties |
| Motion | GSAP |
| Icons | Font Awesome |
| Build | Vite 8, React Compiler |
| Lint | ESLint 10 |

Type is Inter, loaded from Google Fonts.

## Layout

```
myapp/
├── public/                 static files, including project images
├── src/
│   ├── assets/             downloadable files, such as the resume
│   ├── components/
│   │   ├── badges/
│   │   ├── buttons/
│   │   ├── carousel/
│   │   ├── labels/
│   │   ├── pages/          one file per section
│   │   ├── panels/
│   │   └── sectionUI/
│   ├── contexts/           theme, portfolio data, navigation
│   ├── data/               the JSON you actually edit
│   ├── hooks/
│   ├── maps/               section order and panel config
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           global styles and theme tokens
├── index.html
├── vite.config.js
└── eslint.config.js
```

## Edit the content

| File | Holds |
| --- | --- |
| `profile.json` | Name, title, tagline, about, contact, social links |
| `skills.json` | Skill groups and items |
| `education.json` | Degrees, schools, dates |
| `projects.json` | Titles, descriptions, stack, images, URLs |

Put images in `myapp/public/` and point `projects.json` at the filename.

Section order lives in `myapp/src/maps/NAVIGATION_MAP.jsx`. Each entry is an `id`, an anchor `href`, a nav `label`, and a React component.

Three providers wrap the tree:

- **InterfaceProvider** handles theme and the mobile breakpoint.
- **PortfolioProvider** loads the JSON.
- **NavigationProvider** owns section order and the next-section links.

`App.jsx` renders the header, then mounts each section from that map.

## Versions

Shipped releases are in [CHANGELOG.md](CHANGELOG.md). **1.0.0** is this site. **2.0.0** is an open checklist: Docker Compose, a Hero restyle, motion particles, and further upgrades.

## Author

**Omri Spitzer** — Software Engineer

[GitHub](https://github.com/OmriSpitzer) · [LinkedIn](https://linkedin.com/in/OmriSpitzer) · [omri.spitzer@gmail.com](mailto:omri.spitzer@gmail.com)

© 2026 Omri Spitzer
