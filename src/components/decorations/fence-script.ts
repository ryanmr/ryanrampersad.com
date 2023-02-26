import { ready } from "../../library/ready";
import { placeholder } from "../placeholder";

ready(() => {
  const spirals =
    document.querySelectorAll<HTMLCanvasElement>("[data-fence-bg]");

  spirals.forEach((spiral) => {
    setupFence(spiral);
  });
});

function setupFence(element: HTMLElement) {
  const lines = element?.querySelectorAll("line");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  lines?.forEach((line) => {
    const r = Math.random();
    const shouldAnimate = r < 0.5;

    if (shouldAnimate) {
      const delay = Math.round(Math.random() * 4 + 1);
      const duration = prefersReducedMotion
        ? Math.round(Math.random() * 10 + 5)
        : Math.round(Math.random() * 4 + 1);
      line.style.animationDelay = `${delay}s`;
      line.style.animationDuration = `${duration}s`;
      line.classList.add("animate-super-pulse");
    }
  });
}
