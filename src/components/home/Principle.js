import React, { useState, useEffect } from "react";
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

export function Principle() {
  const [counter, setCounter] = useState(0);

  const interval = () => {
    setCounter((p) => ++p % concepts.length);
  };

  useEffect(() => {
    const v = setInterval(interval, 15 * 1000);
    return () => {
      if (v) {
        clearInterval(v);
      }
    };
  });

  const concept = concepts[counter];
  const conceptString = concept.join(" and ").toLowerCase();
  return <div data-principle={conceptString} />;
}
