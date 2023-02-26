import { placeholder } from "../placeholder";
import { differenceInWeeks } from "date-fns";
import { ready } from "../../library/ready";

(() => {
  const initTime = new Date(2016, 2, 28);
  ready(() => {
    const el = document.querySelector("#time-difference");
    if (el) {
      el.innerHTML = `${differenceInWeeks(new Date(), initTime)} weeks`;
    }
  });
})();
