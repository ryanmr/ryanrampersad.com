import { placeholder } from "./placeholder";

(() => {
  const concepts = [
    ["Peace", "Tranquility"],
    ["Authority", "Purpose"],
    ["Power", "Remorse"],
    ["Virtue", "Pursuit"],
    ["Truth", "Reconciliation"],
    ["Solitude", "Reflection"],
    ["Autonomy", "Agency"],
    ["Skeptical", "Analytical"],
    ["Principles", "Philosophy"],
    ["Order", "Progress"],
  ];

  window.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    let index = Date.now() % concepts.length;

    const period = 15 * 1000;

    function think() {
      console.log("hi");
      console.log(index);
      body.dataset.principle = concepts[index].join(" and ");
      index = (index + 1) % concepts.length;
    }

    think();
    setInterval(think, period);
  });
})();

// import React, { useState, useEffect } from "react";

// const seed = Date.now() % concepts.length;

// export function Principle() {
//   const [counter, setCounter] = useState(seed);

//   const interval = () => {
//     setCounter((p) => ++p % concepts.length);
//   };

//   useEffect(() => {
//     const v = setInterval(interval, 15 * 1000);
//     return () => {
//       v && clearInterval(v);
//     };
//   });

//   const concept = concepts[counter];
//   const conceptString = concept.join(" and ").toLowerCase();
//   return <div data-principle={conceptString} />;
// }
