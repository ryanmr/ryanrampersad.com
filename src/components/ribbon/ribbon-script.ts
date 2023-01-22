import { RibbonGenerator } from "./ribbon-generator";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector<HTMLCanvasElement>("#ribbon");

  if (!canvas) {
    return;
  }

  const generator = new RibbonGenerator(canvas, {
    staggerBuildOutDuration: 600,
  });

  window.addEventListener("click", () => {
    generator.setStagger(false);
    generator.generate();
  });

  generator.generate();
});
