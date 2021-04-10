import { createGlobalStyle } from "styled-components";

export const LeagueGothicFont = createGlobalStyle`
  @font-face {
    font-family: "LeagueGothicRegular";
    src: url(${
      require("../../assets/fonts/league-gothic/League_Gothic-webfont.eot")
        .default
    });
    src: url(${
      require("../../assets/fonts/league-gothic/League_Gothic-webfont.eot?#iefix")
        .default
    })
        format("embedded-opentype"),
      url(${
        require("../../assets/fonts/league-gothic/League_Gothic-webfont.woff")
          .default
      })
        format("woff"),
      url(${
        require("../../assets/fonts/league-gothic/League_Gothic-webfont.ttf")
          .default
      })
        format("truetype"),
      url(${
        require("../../assets/fonts/league-gothic/League_Gothic-webfont.svg")
          .default
      })
        format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`;
