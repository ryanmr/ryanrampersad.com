import { ready } from "../../library/ready";
import { placeholder } from "../placeholder";

(() => {
  ready(() => {
    const footer = document.querySelector("#copyright-date");
    if (footer) {
      footer.innerHTML = `${new Date().getFullYear()}`;
    }
  });
})();
