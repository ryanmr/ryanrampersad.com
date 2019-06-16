import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    /* scroll-behavior: smooth; */
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
  html,
  body {
    background-color: #181818;
    color: #eee;
    min-height: 100vh;
  }
  img {
    height: auto;
    max-width: 100%;
  }

  @font-face {
    font-family: "LeagueGothicRegular";
    src: url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.eot")});
    src: url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.eot?#iefix")})
        format("embedded-opentype"),
      url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.woff")})
        format("woff"),
      url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.ttf")})
        format("truetype"),
      url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.svg")})
        format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  #ribbon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  a {
    color: #5d96f4;
    transition: all 0.42s;
  }

  a:hover {
    color: #89afeb;
  }

  span[title] {
    border-bottom: 1px dotted #5e91e4;
  }

  /* * {border: 1px solid red !important;} */
`;
