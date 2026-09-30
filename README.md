# RAZER — Developer Portfolio

An interactive cinematic digital world for **RAZER**
(Computer Engineering Student · Developer · Builder), rendered live in WebGL.
Built on the ThreeUI Kage engine architecture — scroll rig, camera curve,
post-processing chain, perf governor — re-authored as a futuristic
portfolio experience with React 18, TypeScript and Vite.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production bundle in dist/
npm run preview  # serve the production build
```

## The experience

Six chapters drive one continuous camera path:

01 Intro → 02 About → 03 Skills → 04 Projects → 05 Journey → 06 Contact

- **World** — a dark grid floor, an eclipse core burning at the end of the
  lane, a brushed-metal monolith with a red seam, pylon markers for the skill
  rows, antenna towers, drifting shards, haze and data motes.
- **Skills** — a systems readout wired into the world: each row is anchored to
  a pylon, and hovering a row ignites its marker in the scene.
- **Projects** — each showcase frame is a live scissored viewport into the
  world with its own camera; hovering a project leans that camera in.
- **Fallback** — with WebGL unavailable (`?nogl=1` or a failed context) the
  page remains fully readable as a static document.

## Editing content

All portfolio copy is data-driven at the top of
[public/landing-pages/razer.html](public/landing-pages/razer.html):

- `PROFILE` — name, role, blurb, contact links (**replace the placeholder
  GitHub / LinkedIn / email URLs**)
- `NAV` — the six navigation chapters
- `SKILLS`, `PROJECTS`, `TIMELINE`, `CHAPTERS` — the lists rendered into each
  section (**replace the placeholder project URLs**)

## How it's built

- [public/landing-pages/razer.html](public/landing-pages/razer.html) — the
  self-contained experience: world builders, camera waypoints, post chain,
  scroll engine and all portfolio content in one document, served from its
  authored URL.
- [public/landing-pages/razer-assets/](public/landing-pages/razer-assets/) —
  the Three.js runtime (`three.min.js`, r149) and the self-hosted font
  subsets (`Onest` 300/400/500/700 — used both in the document and for the
  3-D wordmark).
- [src/Scene.tsx](src/Scene.tsx) — mounts the document through the shared
  `LandingPageFrame` inside a sandboxed frame.
- [src/shaders/landing-pages/](src/shaders/landing-pages/) — the registered
  ThreeUI frame/typography sources, kept verbatim.
- [src/shaders/threeui.css](src/shaders/threeui.css) — the shared frame style,
  imported by `Scene`.

## Provenance

The engine architecture derives from the ThreeUI Kage landing page
([threeui.com](https://threeui.com), `@designcodeio/threeui` v1.2.0, MIT —
see [LICENSE-THREEUI](LICENSE-THREEUI)). The registered component sources in
`src/shaders/` are kept byte-exact; the portfolio document itself is a
derivative re-authoring of that architecture: all temple content, assets and
branding have been replaced, and the world, chapters and copy are original.

## License

ThreeUI community sources are MIT — see [LICENSE-THREEUI](LICENSE-THREEUI).
