import React from "react";
import styled, { keyframes } from "styled-components";

const AnchorUnderline = keyframes`
    0%,
    10% {
      left: 0;
      right: 100%;
    }
    40%,
    60% {
      left: 0;
      right: 0;
    }
    90%,
    100% {
      left: 100%;
      right: 0;
    }
`;

export const AnimatedLink = styled.a`
  color: #5e91e4;
  position: relative;
  text-decoration: none;
  transition: color 0.4s ease-out;

  &:hover {
    color: #89afeb;
    right: 0;
    text-decoration: none;
  }

  &:hover:after {
    border-color: #457dfb;
    right: 0;
  }

  &:after {
    border-radius: 1em;
    border-top: 0.1em solid #2f56b0;
    content: "";
    position: absolute;
    right: 100%;
    bottom: 0.14em;
    left: 0;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1),
      border-color 0.4s ease-out;
  }

  &:hover:after {
    animation: ${AnchorUnderline} 2s cubic-bezier(0, 0.5, 0, 1) infinite;
    border-color: #457dfb;
  }
`;
