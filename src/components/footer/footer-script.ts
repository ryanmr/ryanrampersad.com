import { placeholder } from "../placeholder";

(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("#copyright-date");
    if (footer) {
      footer.innerHTML = `${new Date().getFullYear()}`;
    }
  });
})();
