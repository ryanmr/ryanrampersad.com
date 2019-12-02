import { createGlobalStyle } from "styled-components";

export const LeagueGothicFont = createGlobalStyle`
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
`;
