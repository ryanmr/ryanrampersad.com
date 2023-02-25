import { placeholder } from "../placeholder";
import { differenceInWeeks } from "date-fns";

(() => {
  const initTime = new Date(2016, 2, 28);
  window.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector("#time-difference");
    if (el) {
      el.innerHTML = `${differenceInWeeks(new Date(), initTime)} weeks`;
    }
  });
})();
