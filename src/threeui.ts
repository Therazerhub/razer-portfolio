/* Entry point mirroring the `@designcodeio/threeui` package's public boundary.
   The registered component sources live in src/shaders/ verbatim; only this
   re-export file is integration-local. The RAZER document, its fonts, its
   Three.js runtime and its imagery sit in public/landing-pages/ and are loaded
   by LandingPageFrame from /landing-pages/razer.html. */
export { KageLandingPage } from "./shaders/landing-pages/LandingPages";
