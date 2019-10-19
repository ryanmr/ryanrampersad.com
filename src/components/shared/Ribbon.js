import React, { useRef, useEffect } from "react";
import { RibbonGenerator } from "./RibbonGenerator";
import styled from "styled-components";

const RibbonCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export function Ribbon() {
  const canvasRef = useRef(null);
  const generatorRef = useRef(null);

  function handleClick() {
    if (canvasRef.current && generatorRef.current) {
      generatorRef.current.terminate();
      generatorRef.current.generate();
    }
  }

  useEffect(() => {
    function setup() {
      const generator = new RibbonGenerator(canvasRef.current);
      generator.generate();

      generatorRef.current = generator;

      if (window) {
        window.addEventListener("click", handleClick);
      }
    }

    function teardown() {
      generatorRef.current && generatorRef.current.terminate();

      if (window) {
        window.removeEventListener("click", handleClick);
      }
    }

    setup();

    return () => teardown();
  }, []);

  return <RibbonCanvas ref={canvasRef} />;
}
