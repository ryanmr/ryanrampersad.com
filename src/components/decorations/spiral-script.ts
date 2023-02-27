import { random, randomRange } from "../../library/random";
import { ready } from "../../library/ready";
import { safeParseInt } from "../../library/utils";
import { placeholder } from "../placeholder";

ready(() => {
  const spirals =
    document.querySelectorAll<HTMLCanvasElement>("[data-spiral-bg]");

  spirals.forEach((spiral) => {
    setupSpiral(spiral);
  });
});

function setupSpiral(element: HTMLElement) {
  const paths = element?.querySelectorAll("path");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const minTiming = 30; // seconds
  const minDuration = 500;

  const settingDuration = element.dataset.spiralBgTiming
    ? safeParseInt(element.dataset.spiralBgTiming, minTiming)
    : minTiming;
  let duration = settingDuration * 1000;
  const durationDecay = duration / (paths?.length ?? 20); // relative to the number of paths

  if (prefersReducedMotion.matches === true) {
    duration = duration * 3; // should run 3x slower when prefers reduced motion is active
  }

  paths?.forEach((path) => {
    // we can't use tailwind classes that are dynamically
    // created, but we can set css styles directly
    const rotate = randomRange(0, 360);
    path.style.transform = `rotate(${rotate}deg)`;
    path.classList.add("origin-center");
    path.classList.add("opacity-100");
    path.style.willChange = "transform";

    // safari has awful svg animation transform
    // performance, so we will give up on this animation for now
    // and rely on this simple static approach for now
    // `animate-super-spin` look in the history for more

    duration -= durationDecay;
  });
}
