import React from "react";
import { theme, GlobalLayout } from "@ryanrampersad/ryan-components";
import { LeagueGothicFont } from "../shared/LeagueGothicFont";

export const BaseLayout = ({ children }) => {
  return (
    <GlobalLayout theme={theme}>
      <LeagueGothicFont />
      {children}
    </GlobalLayout>
  );
};
