import React from "react";
import { keyframes } from "styled-components";

export const FadeInAnimationY = keyframes`
   {
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const FadeInAnimationX = keyframes`
   {
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;
