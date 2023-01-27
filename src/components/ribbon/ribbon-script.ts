import { debounce } from "../../library/debounce";
import { RibbonGenerator } from "./ribbon-generator";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector<HTMLCanvasElement>("#ribbon");

  if (!canvas) {
    return;
  }

  const generator = new RibbonGenerator(canvas, {
    staggerBuildOutDuration: 600,
  });

  function generate() {
    generator.setStagger(false);
    generator.generate();
  }

  window.addEventListener("click", () => {
    generate();
  });

  window.addEventListener("resize", debounce(generate, 350));

  generator.generate();
});
