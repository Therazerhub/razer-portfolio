import { LandingPageFrame } from "./shaders/landing-pages/LandingPageFrame";
import "./shaders/threeui.css";

/**
 * The RAZER portfolio experience.
 *
 * The cinematic document lives at /landing-pages/razer.html — a self-contained
 * WebGL world (its own scroll engine, camera rig, post chain and perf governor)
 * served from its authored URL and loaded here inside the shared landing-page
 * frame. No registry component is mounted: this is a derivative work of the
 * ThreeUI Kage architecture, re-authored for RAZER.
 */
export function Scene() {
  return (
    <div className="shader-frame">
      <LandingPageFrame
        title="RAZER — Computer Engineering Student · Developer · Builder"
        sourceUrl="/landing-pages/razer.html"
      />
    </div>
  );
}
