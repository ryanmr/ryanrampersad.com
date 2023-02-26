import { debounce } from "../../library/debounce";
import { ready } from "../../library/ready";
import { RibbonGenerator } from "./ribbon-generator";

ready(() => {
  const canvas = document.querySelector<HTMLCanvasElement>("#ribbon");

  if (!canvas) {
    return;
  }

  const generator = new RibbonGenerator(canvas, {
    staggerBuildOutDuration: 600,
  });

  function generate() {
    generator.setStagger(false);
    generator.resetAndGenerate();
  }

  window.addEventListener("click", () => {
    generate();
  });

  window.addEventListener("resize", debounce(generate, 350));

  generator.generate();
});
